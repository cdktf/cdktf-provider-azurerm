# `azurerm_subscription_policy_remediation`

Refer to the Terraform Registory for docs: [`azurerm_subscription_policy_remediation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation).

# `subscriptionPolicyRemediation` Submodule <a name="`subscriptionPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyRemediation <a name="SubscriptionPolicyRemediation" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation azurerm_subscription_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

subscriptionpolicyremediation.NewSubscriptionPolicyRemediation(scope Construct, id *string, config SubscriptionPolicyRemediationConfig) SubscriptionPolicyRemediation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig">SubscriptionPolicyRemediationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig">SubscriptionPolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage">ResetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters">ResetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments">ResetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionId">ResetPolicyDefinitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount">ResetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode">ResetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts"></a>

```go
func PutTimeouts(value SubscriptionPolicyRemediationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

---

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetFailurePercentage"></a>

```go
func ResetFailurePercentage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationFilters` <a name="ResetLocationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetLocationFilters"></a>

```go
func ResetLocationFilters()
```

##### `ResetParallelDeployments` <a name="ResetParallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetParallelDeployments"></a>

```go
func ResetParallelDeployments()
```

##### `ResetPolicyDefinitionId` <a name="ResetPolicyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionId"></a>

```go
func ResetPolicyDefinitionId()
```

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```go
func ResetPolicyDefinitionReferenceId()
```

##### `ResetResourceCount` <a name="ResetResourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceCount"></a>

```go
func ResetResourceCount()
```

##### `ResetResourceDiscoveryMode` <a name="ResetResourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetResourceDiscoveryMode"></a>

```go
func ResetResourceDiscoveryMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

subscriptionpolicyremediation.SubscriptionPolicyRemediation_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

subscriptionpolicyremediation.SubscriptionPolicyRemediation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

subscriptionpolicyremediation.SubscriptionPolicyRemediation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput">LocationFiltersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput">ParallelDeploymentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput">ResourceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput">ResourceDiscoveryModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage">FailurePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters">LocationFilters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments">ParallelDeployments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount">ResourceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeouts"></a>

```go
func Timeouts() SubscriptionPolicyRemediationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference">SubscriptionPolicyRemediationTimeoutsOutputReference</a>

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentageInput"></a>

```go
func FailurePercentageInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationFiltersInput`<sup>Optional</sup> <a name="LocationFiltersInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFiltersInput"></a>

```go
func LocationFiltersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParallelDeploymentsInput`<sup>Optional</sup> <a name="ParallelDeploymentsInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeploymentsInput"></a>

```go
func ParallelDeploymentsInput() *f64
```

- *Type:* *f64

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentIdInput"></a>

```go
func PolicyAssignmentIdInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionIdInput"></a>

```go
func PolicyDefinitionIdInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```go
func PolicyDefinitionReferenceIdInput() *string
```

- *Type:* *string

---

##### `ResourceCountInput`<sup>Optional</sup> <a name="ResourceCountInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCountInput"></a>

```go
func ResourceCountInput() *f64
```

- *Type:* *f64

---

##### `ResourceDiscoveryModeInput`<sup>Optional</sup> <a name="ResourceDiscoveryModeInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryModeInput"></a>

```go
func ResourceDiscoveryModeInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.failurePercentage"></a>

```go
func FailurePercentage() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationFilters`<sup>Required</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.locationFilters"></a>

```go
func LocationFilters() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParallelDeployments`<sup>Required</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.parallelDeployments"></a>

```go
func ParallelDeployments() *f64
```

- *Type:* *f64

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyAssignmentId"></a>

```go
func PolicyAssignmentId() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.policyDefinitionReferenceId"></a>

```go
func PolicyDefinitionReferenceId() *string
```

- *Type:* *string

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceCount"></a>

```go
func ResourceCount() *f64
```

- *Type:* *f64

---

##### `ResourceDiscoveryMode`<sup>Required</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.resourceDiscoveryMode"></a>

```go
func ResourceDiscoveryMode() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyRemediationConfig <a name="SubscriptionPolicyRemediationConfig" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

&subscriptionpolicyremediation.SubscriptionPolicyRemediationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyAssignmentId: *string,
	SubscriptionId: *string,
	FailurePercentage: *f64,
	Id: *string,
	LocationFilters: *[]*string,
	ParallelDeployments: *f64,
	PolicyDefinitionId: *string,
	PolicyDefinitionReferenceId: *string,
	ResourceCount: *f64,
	ResourceDiscoveryMode: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage">FailurePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters">LocationFilters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments">ParallelDeployments</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount">ResourceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#name SubscriptionPolicyRemediation#name}.

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyAssignmentId"></a>

```go
PolicyAssignmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_assignment_id SubscriptionPolicyRemediation#policy_assignment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#subscription_id SubscriptionPolicyRemediation#subscription_id}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.failurePercentage"></a>

```go
FailurePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#failure_percentage SubscriptionPolicyRemediation#failure_percentage}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#id SubscriptionPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationFilters`<sup>Optional</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.locationFilters"></a>

```go
LocationFilters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#location_filters SubscriptionPolicyRemediation#location_filters}.

---

##### `ParallelDeployments`<sup>Optional</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.parallelDeployments"></a>

```go
ParallelDeployments *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#parallel_deployments SubscriptionPolicyRemediation#parallel_deployments}.

---

##### `PolicyDefinitionId`<sup>Optional</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionId"></a>

```go
PolicyDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_definition_id SubscriptionPolicyRemediation#policy_definition_id}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```go
PolicyDefinitionReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#policy_definition_reference_id SubscriptionPolicyRemediation#policy_definition_reference_id}.

---

##### `ResourceCount`<sup>Optional</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceCount"></a>

```go
ResourceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#resource_count SubscriptionPolicyRemediation#resource_count}.

---

##### `ResourceDiscoveryMode`<sup>Optional</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```go
ResourceDiscoveryMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#resource_discovery_mode SubscriptionPolicyRemediation#resource_discovery_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationConfig.property.timeouts"></a>

```go
Timeouts SubscriptionPolicyRemediationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts">SubscriptionPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#timeouts SubscriptionPolicyRemediation#timeouts}

---

### SubscriptionPolicyRemediationTimeouts <a name="SubscriptionPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

&subscriptionpolicyremediation.SubscriptionPolicyRemediationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#create SubscriptionPolicyRemediation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#delete SubscriptionPolicyRemediation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#read SubscriptionPolicyRemediation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/subscription_policy_remediation#update SubscriptionPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyRemediationTimeoutsOutputReference <a name="SubscriptionPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyremediation"

subscriptionpolicyremediation.NewSubscriptionPolicyRemediationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubscriptionPolicyRemediationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyRemediation.SubscriptionPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



