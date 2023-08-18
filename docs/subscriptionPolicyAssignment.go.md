# `azurerm_subscription_policy_assignment`

Refer to the Terraform Registory for docs: [`azurerm_subscription_policy_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment).

# `subscriptionPolicyAssignment` Submodule <a name="`subscriptionPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionPolicyAssignment <a name="SubscriptionPolicyAssignment" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment azurerm_subscription_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignment(scope Construct, id *string, config SubscriptionPolicyAssignmentConfig) SubscriptionPolicyAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig">SubscriptionPolicyAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig">SubscriptionPolicyAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage">PutNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putResourceSelectors">PutResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNonComplianceMessage">ResetNonComplianceMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNotScopes">ResetNotScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetResourceSelectors">ResetResourceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity"></a>

```go
func PutIdentity(value SubscriptionPolicyAssignmentIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---

##### `PutNonComplianceMessage` <a name="PutNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage"></a>

```go
func PutNonComplianceMessage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putOverrides"></a>

```go
func PutOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceSelectors` <a name="PutResourceSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putResourceSelectors"></a>

```go
func PutResourceSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putResourceSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts"></a>

```go
func PutTimeouts(value SubscriptionPolicyAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetEnforce"></a>

```go
func ResetEnforce()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNonComplianceMessage` <a name="ResetNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNonComplianceMessage"></a>

```go
func ResetNonComplianceMessage()
```

##### `ResetNotScopes` <a name="ResetNotScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetNotScopes"></a>

```go
func ResetNotScopes()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetResourceSelectors` <a name="ResetResourceSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetResourceSelectors"></a>

```go
func ResetResourceSelectors()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.SubscriptionPolicyAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.SubscriptionPolicyAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.SubscriptionPolicyAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference">SubscriptionPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList">SubscriptionPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList">SubscriptionPolicyAssignmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.resourceSelectors">ResourceSelectors</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList">SubscriptionPolicyAssignmentResourceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference">SubscriptionPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforceInput">EnforceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessageInput">NonComplianceMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopesInput">NotScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionIdInput">PolicyDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.resourceSelectorsInput">ResourceSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforce">Enforce</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopes">NotScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identity"></a>

```go
func Identity() SubscriptionPolicyAssignmentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference">SubscriptionPolicyAssignmentIdentityOutputReference</a>

---

##### `NonComplianceMessage`<sup>Required</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessage"></a>

```go
func NonComplianceMessage() SubscriptionPolicyAssignmentNonComplianceMessageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList">SubscriptionPolicyAssignmentNonComplianceMessageList</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.overrides"></a>

```go
func Overrides() SubscriptionPolicyAssignmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList">SubscriptionPolicyAssignmentOverridesList</a>

---

##### `ResourceSelectors`<sup>Required</sup> <a name="ResourceSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.resourceSelectors"></a>

```go
func ResourceSelectors() SubscriptionPolicyAssignmentResourceSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList">SubscriptionPolicyAssignmentResourceSelectorsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeouts"></a>

```go
func Timeouts() SubscriptionPolicyAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference">SubscriptionPolicyAssignmentTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforceInput"></a>

```go
func EnforceInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.identityInput"></a>

```go
func IdentityInput() SubscriptionPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonComplianceMessageInput`<sup>Optional</sup> <a name="NonComplianceMessageInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.nonComplianceMessageInput"></a>

```go
func NonComplianceMessageInput() interface{}
```

- *Type:* interface{}

---

##### `NotScopesInput`<sup>Optional</sup> <a name="NotScopesInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopesInput"></a>

```go
func NotScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionIdInput`<sup>Optional</sup> <a name="PolicyDefinitionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionIdInput"></a>

```go
func PolicyDefinitionIdInput() *string
```

- *Type:* *string

---

##### `ResourceSelectorsInput`<sup>Optional</sup> <a name="ResourceSelectorsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.resourceSelectorsInput"></a>

```go
func ResourceSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.enforce"></a>

```go
func Enforce() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotScopes`<sup>Required</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.notScopes"></a>

```go
func NotScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionPolicyAssignmentConfig <a name="SubscriptionPolicyAssignmentConfig" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PolicyDefinitionId: *string,
	SubscriptionId: *string,
	Description: *string,
	DisplayName: *string,
	Enforce: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity,
	Location: *string,
	Metadata: *string,
	NonComplianceMessage: interface{},
	NotScopes: *[]*string,
	Overrides: interface{},
	Parameters: *string,
	ResourceSelectors: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#policy_definition_id SubscriptionPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#subscription_id SubscriptionPolicyAssignment#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#description SubscriptionPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#display_name SubscriptionPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.enforce">Enforce</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#enforce SubscriptionPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#id SubscriptionPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#location SubscriptionPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#metadata SubscriptionPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.nonComplianceMessage">NonComplianceMessage</a></code> | <code>interface{}</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.notScopes">NotScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_scopes SubscriptionPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.overrides">Overrides</a></code> | <code>interface{}</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#parameters SubscriptionPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.resourceSelectors">ResourceSelectors</a></code> | <code>interface{}</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}.

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.policyDefinitionId"></a>

```go
PolicyDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#policy_definition_id SubscriptionPolicyAssignment#policy_definition_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#subscription_id SubscriptionPolicyAssignment#subscription_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#description SubscriptionPolicyAssignment#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#display_name SubscriptionPolicyAssignment#display_name}.

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.enforce"></a>

```go
Enforce interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#enforce SubscriptionPolicyAssignment#enforce}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#id SubscriptionPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.identity"></a>

```go
Identity SubscriptionPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#identity SubscriptionPolicyAssignment#identity}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#location SubscriptionPolicyAssignment#location}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#metadata SubscriptionPolicyAssignment#metadata}.

---

##### `NonComplianceMessage`<sup>Optional</sup> <a name="NonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```go
NonComplianceMessage interface{}
```

- *Type:* interface{}

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#non_compliance_message SubscriptionPolicyAssignment#non_compliance_message}

---

##### `NotScopes`<sup>Optional</sup> <a name="NotScopes" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.notScopes"></a>

```go
NotScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_scopes SubscriptionPolicyAssignment#not_scopes}.

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.overrides"></a>

```go
Overrides interface{}
```

- *Type:* interface{}

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#overrides SubscriptionPolicyAssignment#overrides}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#parameters SubscriptionPolicyAssignment#parameters}.

---

##### `ResourceSelectors`<sup>Optional</sup> <a name="ResourceSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.resourceSelectors"></a>

```go
ResourceSelectors interface{}
```

- *Type:* interface{}

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#resource_selectors SubscriptionPolicyAssignment#resource_selectors}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentConfig.property.timeouts"></a>

```go
Timeouts SubscriptionPolicyAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts">SubscriptionPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#timeouts SubscriptionPolicyAssignment#timeouts}

---

### SubscriptionPolicyAssignmentIdentity <a name="SubscriptionPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#type SubscriptionPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#identity_ids SubscriptionPolicyAssignment#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#type SubscriptionPolicyAssignment#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#identity_ids SubscriptionPolicyAssignment#identity_ids}.

---

### SubscriptionPolicyAssignmentNonComplianceMessage <a name="SubscriptionPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentNonComplianceMessage {
	Content: *string,
	PolicyDefinitionReferenceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#content SubscriptionPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#policy_definition_reference_id SubscriptionPolicyAssignment#policy_definition_reference_id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#content SubscriptionPolicyAssignment#content}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```go
PolicyDefinitionReferenceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#policy_definition_reference_id SubscriptionPolicyAssignment#policy_definition_reference_id}.

---

### SubscriptionPolicyAssignmentOverrides <a name="SubscriptionPolicyAssignmentOverrides" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentOverrides {
	Value: *string,
	Selectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#value SubscriptionPolicyAssignment#value}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#value SubscriptionPolicyAssignment#value}.

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverrides.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#selectors SubscriptionPolicyAssignment#selectors}

---

### SubscriptionPolicyAssignmentOverridesSelectors <a name="SubscriptionPolicyAssignmentOverridesSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentOverridesSelectors {
	In: *[]*string,
	NotIn: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors.property.in">In</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#in SubscriptionPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors.property.notIn">NotIn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_in SubscriptionPolicyAssignment#not_in}. |

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors.property.in"></a>

```go
In *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#in SubscriptionPolicyAssignment#in}.

---

##### `NotIn`<sup>Optional</sup> <a name="NotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectors.property.notIn"></a>

```go
NotIn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_in SubscriptionPolicyAssignment#not_in}.

---

### SubscriptionPolicyAssignmentResourceSelectors <a name="SubscriptionPolicyAssignmentResourceSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentResourceSelectors {
	Selectors: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}. |

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#selectors SubscriptionPolicyAssignment#selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectors.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#name SubscriptionPolicyAssignment#name}.

---

### SubscriptionPolicyAssignmentResourceSelectorsSelectors <a name="SubscriptionPolicyAssignmentResourceSelectorsSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors {
	Kind: *string,
	In: *[]*string,
	NotIn: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#kind SubscriptionPolicyAssignment#kind}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.in">In</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#in SubscriptionPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.notIn">NotIn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_in SubscriptionPolicyAssignment#not_in}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#kind SubscriptionPolicyAssignment#kind}.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.in"></a>

```go
In *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#in SubscriptionPolicyAssignment#in}.

---

##### `NotIn`<sup>Optional</sup> <a name="NotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectors.property.notIn"></a>

```go
NotIn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#not_in SubscriptionPolicyAssignment#not_in}.

---

### SubscriptionPolicyAssignmentTimeouts <a name="SubscriptionPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

&subscriptionpolicyassignment.SubscriptionPolicyAssignmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#create SubscriptionPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#delete SubscriptionPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#read SubscriptionPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#update SubscriptionPolicyAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#create SubscriptionPolicyAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#delete SubscriptionPolicyAssignment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#read SubscriptionPolicyAssignment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/subscription_policy_assignment#update SubscriptionPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionPolicyAssignmentIdentityOutputReference <a name="SubscriptionPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubscriptionPolicyAssignmentIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() SubscriptionPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentIdentity">SubscriptionPolicyAssignmentIdentity</a>

---


### SubscriptionPolicyAssignmentNonComplianceMessageList <a name="SubscriptionPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentNonComplianceMessageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubscriptionPolicyAssignmentNonComplianceMessageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get"></a>

```go
func Get(index *f64) SubscriptionPolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentNonComplianceMessageOutputReference <a name="SubscriptionPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentNonComplianceMessageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubscriptionPolicyAssignmentNonComplianceMessageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```go
func ResetPolicyDefinitionReferenceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```go
func PolicyDefinitionReferenceIdInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```go
func PolicyDefinitionReferenceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentOverridesList <a name="SubscriptionPolicyAssignmentOverridesList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubscriptionPolicyAssignmentOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.get"></a>

```go
func Get(index *f64) SubscriptionPolicyAssignmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentOverridesOutputReference <a name="SubscriptionPolicyAssignmentOverridesOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubscriptionPolicyAssignmentOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList">SubscriptionPolicyAssignmentOverridesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.selectors"></a>

```go
func Selectors() SubscriptionPolicyAssignmentOverridesSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList">SubscriptionPolicyAssignmentOverridesSelectorsList</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentOverridesSelectorsList <a name="SubscriptionPolicyAssignmentOverridesSelectorsList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentOverridesSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubscriptionPolicyAssignmentOverridesSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.get"></a>

```go
func Get(index *f64) SubscriptionPolicyAssignmentOverridesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentOverridesSelectorsOutputReference <a name="SubscriptionPolicyAssignmentOverridesSelectorsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentOverridesSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubscriptionPolicyAssignmentOverridesSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn">ResetNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resetIn"></a>

```go
func ResetIn()
```

##### `ResetNotIn` <a name="ResetNotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn"></a>

```go
func ResetNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.inInput">InInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput">NotInInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.in">In</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.notIn">NotIn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.inInput"></a>

```go
func InInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotInInput`<sup>Optional</sup> <a name="NotInInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput"></a>

```go
func NotInInput() *[]*string
```

- *Type:* *[]*string

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.in"></a>

```go
func In() *[]*string
```

- *Type:* *[]*string

---

##### `NotIn`<sup>Required</sup> <a name="NotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.notIn"></a>

```go
func NotIn() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentResourceSelectorsList <a name="SubscriptionPolicyAssignmentResourceSelectorsList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentResourceSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubscriptionPolicyAssignmentResourceSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.get"></a>

```go
func Get(index *f64) SubscriptionPolicyAssignmentResourceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentResourceSelectorsOutputReference <a name="SubscriptionPolicyAssignmentResourceSelectorsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentResourceSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubscriptionPolicyAssignmentResourceSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectors` <a name="PutSelectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList">SubscriptionPolicyAssignmentResourceSelectorsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.selectors"></a>

```go
func Selectors() SubscriptionPolicyAssignmentResourceSelectorsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList">SubscriptionPolicyAssignmentResourceSelectorsSelectorsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentResourceSelectorsSelectorsList <a name="SubscriptionPolicyAssignmentResourceSelectorsSelectorsList" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentResourceSelectorsSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SubscriptionPolicyAssignmentResourceSelectorsSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.get"></a>

```go
func Get(index *f64) SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference <a name="SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn">ResetNotIn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIn` <a name="ResetIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn"></a>

```go
func ResetIn()
```

##### `ResetNotIn` <a name="ResetNotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn"></a>

```go
func ResetNotIn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput">InInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput">NotInInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in">In</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn">NotIn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput"></a>

```go
func InInput() *[]*string
```

- *Type:* *[]*string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NotInInput`<sup>Optional</sup> <a name="NotInInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput"></a>

```go
func NotInInput() *[]*string
```

- *Type:* *[]*string

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in"></a>

```go
func In() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `NotIn`<sup>Required</sup> <a name="NotIn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn"></a>

```go
func NotIn() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SubscriptionPolicyAssignmentTimeoutsOutputReference <a name="SubscriptionPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/subscriptionpolicyassignment"

subscriptionpolicyassignment.NewSubscriptionPolicyAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubscriptionPolicyAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionPolicyAssignment.SubscriptionPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



