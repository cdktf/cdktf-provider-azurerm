# `azurerm_iot_security_solution`

Refer to the Terraform Registory for docs: [`azurerm_iot_security_solution`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution).

# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktf/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.NewIotSecuritySolution(scope Construct, id *string, config IotSecuritySolutionConfig) IotSecuritySolution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">PutAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled">PutRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">ResetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">ResetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">ResetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">ResetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">ResetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">ResetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled">ResetRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdditionalWorkspace` <a name="PutAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```go
func PutAdditionalWorkspace(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecommendationsEnabled` <a name="PutRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled"></a>

```go
func PutRecommendationsEnabled(value IotSecuritySolutionRecommendationsEnabled)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```go
func PutTimeouts(value IotSecuritySolutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `ResetAdditionalWorkspace` <a name="ResetAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```go
func ResetAdditionalWorkspace()
```

##### `ResetDisabledDataSources` <a name="ResetDisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```go
func ResetDisabledDataSources()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventsToExport` <a name="ResetEventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```go
func ResetEventsToExport()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```go
func ResetId()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```go
func ResetLogAnalyticsWorkspaceId()
```

##### `ResetLogUnmaskedIpsEnabled` <a name="ResetLogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```go
func ResetLogUnmaskedIpsEnabled()
```

##### `ResetQueryForResources` <a name="ResetQueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```go
func ResetQueryForResources()
```

##### `ResetQuerySubscriptionIds` <a name="ResetQuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```go
func ResetQuerySubscriptionIds()
```

##### `ResetRecommendationsEnabled` <a name="ResetRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled"></a>

```go
func ResetRecommendationsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.IotSecuritySolution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.IotSecuritySolution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.IotSecuritySolution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">AdditionalWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled">RecommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">AdditionalWorkspaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">DisabledDataSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">EventsToExportInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">IothubIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">LogUnmaskedIpsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">QueryForResourcesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">QuerySubscriptionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput">RecommendationsEnabledInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">DisabledDataSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">EventsToExport</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">IothubIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">LogUnmaskedIpsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">QueryForResources</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">QuerySubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalWorkspace`<sup>Required</sup> <a name="AdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```go
func AdditionalWorkspace() IotSecuritySolutionAdditionalWorkspaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `RecommendationsEnabled`<sup>Required</sup> <a name="RecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled"></a>

```go
func RecommendationsEnabled() IotSecuritySolutionRecommendationsEnabledOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```go
func Timeouts() IotSecuritySolutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `AdditionalWorkspaceInput`<sup>Optional</sup> <a name="AdditionalWorkspaceInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```go
func AdditionalWorkspaceInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledDataSourcesInput`<sup>Optional</sup> <a name="DisabledDataSourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```go
func DisabledDataSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventsToExportInput`<sup>Optional</sup> <a name="EventsToExportInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```go
func EventsToExportInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubIdsInput`<sup>Optional</sup> <a name="IothubIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```go
func IothubIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `LogUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="LogUnmaskedIpsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```go
func LogUnmaskedIpsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryForResourcesInput`<sup>Optional</sup> <a name="QueryForResourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```go
func QueryForResourcesInput() *string
```

- *Type:* *string

---

##### `QuerySubscriptionIdsInput`<sup>Optional</sup> <a name="QuerySubscriptionIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```go
func QuerySubscriptionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecommendationsEnabledInput`<sup>Optional</sup> <a name="RecommendationsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput"></a>

```go
func RecommendationsEnabledInput() IotSecuritySolutionRecommendationsEnabled
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledDataSources`<sup>Required</sup> <a name="DisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```go
func DisabledDataSources() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventsToExport`<sup>Required</sup> <a name="EventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```go
func EventsToExport() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubIds`<sup>Required</sup> <a name="IothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```go
func IothubIds() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `LogUnmaskedIpsEnabled`<sup>Required</sup> <a name="LogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```go
func LogUnmaskedIpsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryForResources`<sup>Required</sup> <a name="QueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```go
func QueryForResources() *string
```

- *Type:* *string

---

##### `QuerySubscriptionIds`<sup>Required</sup> <a name="QuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```go
func QuerySubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

&iotsecuritysolution.IotSecuritySolutionAdditionalWorkspace {
	DataTypes: *[]*string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">DataTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```go
DataTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

&iotsecuritysolution.IotSecuritySolutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	IothubIds: *[]*string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AdditionalWorkspace: interface{},
	DisabledDataSources: *[]*string,
	Enabled: interface{},
	EventsToExport: *[]*string,
	Id: *string,
	LogAnalyticsWorkspaceId: *string,
	LogUnmaskedIpsEnabled: interface{},
	QueryForResources: *string,
	QuerySubscriptionIds: *[]*string,
	RecommendationsEnabled: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.iotSecuritySolution.IotSecuritySolutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">IothubIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">AdditionalWorkspace</a></code> | <code>interface{}</code> | additional_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">DisabledDataSources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">EventsToExport</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">LogUnmaskedIpsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">QueryForResources</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">QuerySubscriptionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled">RecommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | recommendations_enabled block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `IothubIds`<sup>Required</sup> <a name="IothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```go
IothubIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `AdditionalWorkspace`<sup>Optional</sup> <a name="AdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```go
AdditionalWorkspace interface{}
```

- *Type:* interface{}

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `DisabledDataSources`<sup>Optional</sup> <a name="DisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```go
DisabledDataSources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `EventsToExport`<sup>Optional</sup> <a name="EventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```go
EventsToExport *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `LogUnmaskedIpsEnabled`<sup>Optional</sup> <a name="LogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```go
LogUnmaskedIpsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `QueryForResources`<sup>Optional</sup> <a name="QueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```go
QueryForResources *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `QuerySubscriptionIds`<sup>Optional</sup> <a name="QuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```go
QuerySubscriptionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `RecommendationsEnabled`<sup>Optional</sup> <a name="RecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled"></a>

```go
RecommendationsEnabled IotSecuritySolutionRecommendationsEnabled
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

recommendations_enabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```go
Timeouts IotSecuritySolutionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendationsEnabled <a name="IotSecuritySolutionRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

&iotsecuritysolution.IotSecuritySolutionRecommendationsEnabled {
	AcrAuthentication: interface{},
	AgentSendUnutilizedMsg: interface{},
	Baseline: interface{},
	EdgeHubMemOptimize: interface{},
	EdgeLoggingOption: interface{},
	InconsistentModuleSettings: interface{},
	InstallAgent: interface{},
	IpFilterDenyAll: interface{},
	IpFilterPermissiveRule: interface{},
	OpenPorts: interface{},
	PermissiveFirewallPolicy: interface{},
	PermissiveInputFirewallRules: interface{},
	PermissiveOutputFirewallRules: interface{},
	PrivilegedDockerOptions: interface{},
	SharedCredentials: interface{},
	VulnerableTlsCipherSuite: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication">AcrAuthentication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg">AgentSendUnutilizedMsg</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline">Baseline</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize">EdgeHubMemOptimize</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption">EdgeLoggingOption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings">InconsistentModuleSettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent">InstallAgent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll">IpFilterDenyAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule">IpFilterPermissiveRule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts">OpenPorts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy">PermissiveFirewallPolicy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules">PermissiveInputFirewallRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules">PermissiveOutputFirewallRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions">PrivilegedDockerOptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials">SharedCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite">VulnerableTlsCipherSuite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `AcrAuthentication`<sup>Optional</sup> <a name="AcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication"></a>

```go
AcrAuthentication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `AgentSendUnutilizedMsg`<sup>Optional</sup> <a name="AgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg"></a>

```go
AgentSendUnutilizedMsg interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `Baseline`<sup>Optional</sup> <a name="Baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline"></a>

```go
Baseline interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `EdgeHubMemOptimize`<sup>Optional</sup> <a name="EdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize"></a>

```go
EdgeHubMemOptimize interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `EdgeLoggingOption`<sup>Optional</sup> <a name="EdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption"></a>

```go
EdgeLoggingOption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `InconsistentModuleSettings`<sup>Optional</sup> <a name="InconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings"></a>

```go
InconsistentModuleSettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `InstallAgent`<sup>Optional</sup> <a name="InstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent"></a>

```go
InstallAgent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `IpFilterDenyAll`<sup>Optional</sup> <a name="IpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll"></a>

```go
IpFilterDenyAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `IpFilterPermissiveRule`<sup>Optional</sup> <a name="IpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule"></a>

```go
IpFilterPermissiveRule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `OpenPorts`<sup>Optional</sup> <a name="OpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts"></a>

```go
OpenPorts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `PermissiveFirewallPolicy`<sup>Optional</sup> <a name="PermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy"></a>

```go
PermissiveFirewallPolicy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `PermissiveInputFirewallRules`<sup>Optional</sup> <a name="PermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules"></a>

```go
PermissiveInputFirewallRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `PermissiveOutputFirewallRules`<sup>Optional</sup> <a name="PermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules"></a>

```go
PermissiveOutputFirewallRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `PrivilegedDockerOptions`<sup>Optional</sup> <a name="PrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions"></a>

```go
PrivilegedDockerOptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `SharedCredentials`<sup>Optional</sup> <a name="SharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials"></a>

```go
SharedCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `VulnerableTlsCipherSuite`<sup>Optional</sup> <a name="VulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite"></a>

```go
VulnerableTlsCipherSuite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

&iotsecuritysolution.IotSecuritySolutionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.NewIotSecuritySolutionAdditionalWorkspaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotSecuritySolutionAdditionalWorkspaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```go
func Get(index *f64) IotSecuritySolutionAdditionalWorkspaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.NewIotSecuritySolutionAdditionalWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotSecuritySolutionAdditionalWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">DataTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">DataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTypesInput`<sup>Optional</sup> <a name="DataTypesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```go
func DataTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```go
func DataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecuritySolutionRecommendationsEnabledOutputReference <a name="IotSecuritySolutionRecommendationsEnabledOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.NewIotSecuritySolutionRecommendationsEnabledOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecuritySolutionRecommendationsEnabledOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication">ResetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg">ResetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline">ResetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize">ResetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption">ResetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings">ResetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent">ResetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll">ResetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule">ResetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts">ResetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy">ResetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules">ResetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules">ResetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions">ResetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials">ResetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite">ResetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcrAuthentication` <a name="ResetAcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication"></a>

```go
func ResetAcrAuthentication()
```

##### `ResetAgentSendUnutilizedMsg` <a name="ResetAgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg"></a>

```go
func ResetAgentSendUnutilizedMsg()
```

##### `ResetBaseline` <a name="ResetBaseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline"></a>

```go
func ResetBaseline()
```

##### `ResetEdgeHubMemOptimize` <a name="ResetEdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize"></a>

```go
func ResetEdgeHubMemOptimize()
```

##### `ResetEdgeLoggingOption` <a name="ResetEdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption"></a>

```go
func ResetEdgeLoggingOption()
```

##### `ResetInconsistentModuleSettings` <a name="ResetInconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings"></a>

```go
func ResetInconsistentModuleSettings()
```

##### `ResetInstallAgent` <a name="ResetInstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent"></a>

```go
func ResetInstallAgent()
```

##### `ResetIpFilterDenyAll` <a name="ResetIpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll"></a>

```go
func ResetIpFilterDenyAll()
```

##### `ResetIpFilterPermissiveRule` <a name="ResetIpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule"></a>

```go
func ResetIpFilterPermissiveRule()
```

##### `ResetOpenPorts` <a name="ResetOpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts"></a>

```go
func ResetOpenPorts()
```

##### `ResetPermissiveFirewallPolicy` <a name="ResetPermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy"></a>

```go
func ResetPermissiveFirewallPolicy()
```

##### `ResetPermissiveInputFirewallRules` <a name="ResetPermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules"></a>

```go
func ResetPermissiveInputFirewallRules()
```

##### `ResetPermissiveOutputFirewallRules` <a name="ResetPermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules"></a>

```go
func ResetPermissiveOutputFirewallRules()
```

##### `ResetPrivilegedDockerOptions` <a name="ResetPrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions"></a>

```go
func ResetPrivilegedDockerOptions()
```

##### `ResetSharedCredentials` <a name="ResetSharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials"></a>

```go
func ResetSharedCredentials()
```

##### `ResetVulnerableTlsCipherSuite` <a name="ResetVulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite"></a>

```go
func ResetVulnerableTlsCipherSuite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput">AcrAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput">AgentSendUnutilizedMsgInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput">BaselineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput">EdgeHubMemOptimizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput">EdgeLoggingOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput">InconsistentModuleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput">InstallAgentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput">IpFilterDenyAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput">IpFilterPermissiveRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput">OpenPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput">PermissiveFirewallPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput">PermissiveInputFirewallRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput">PermissiveOutputFirewallRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput">PrivilegedDockerOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput">SharedCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput">VulnerableTlsCipherSuiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication">AcrAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg">AgentSendUnutilizedMsg</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline">Baseline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize">EdgeHubMemOptimize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption">EdgeLoggingOption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings">InconsistentModuleSettings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent">InstallAgent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll">IpFilterDenyAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule">IpFilterPermissiveRule</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts">OpenPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy">PermissiveFirewallPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules">PermissiveInputFirewallRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules">PermissiveOutputFirewallRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions">PrivilegedDockerOptions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials">SharedCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite">VulnerableTlsCipherSuite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcrAuthenticationInput`<sup>Optional</sup> <a name="AcrAuthenticationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput"></a>

```go
func AcrAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `AgentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="AgentSendUnutilizedMsgInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput"></a>

```go
func AgentSendUnutilizedMsgInput() interface{}
```

- *Type:* interface{}

---

##### `BaselineInput`<sup>Optional</sup> <a name="BaselineInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput"></a>

```go
func BaselineInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeHubMemOptimizeInput`<sup>Optional</sup> <a name="EdgeHubMemOptimizeInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput"></a>

```go
func EdgeHubMemOptimizeInput() interface{}
```

- *Type:* interface{}

---

##### `EdgeLoggingOptionInput`<sup>Optional</sup> <a name="EdgeLoggingOptionInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput"></a>

```go
func EdgeLoggingOptionInput() interface{}
```

- *Type:* interface{}

---

##### `InconsistentModuleSettingsInput`<sup>Optional</sup> <a name="InconsistentModuleSettingsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput"></a>

```go
func InconsistentModuleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InstallAgentInput`<sup>Optional</sup> <a name="InstallAgentInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput"></a>

```go
func InstallAgentInput() interface{}
```

- *Type:* interface{}

---

##### `IpFilterDenyAllInput`<sup>Optional</sup> <a name="IpFilterDenyAllInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput"></a>

```go
func IpFilterDenyAllInput() interface{}
```

- *Type:* interface{}

---

##### `IpFilterPermissiveRuleInput`<sup>Optional</sup> <a name="IpFilterPermissiveRuleInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput"></a>

```go
func IpFilterPermissiveRuleInput() interface{}
```

- *Type:* interface{}

---

##### `OpenPortsInput`<sup>Optional</sup> <a name="OpenPortsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput"></a>

```go
func OpenPortsInput() interface{}
```

- *Type:* interface{}

---

##### `PermissiveFirewallPolicyInput`<sup>Optional</sup> <a name="PermissiveFirewallPolicyInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput"></a>

```go
func PermissiveFirewallPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `PermissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="PermissiveInputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput"></a>

```go
func PermissiveInputFirewallRulesInput() interface{}
```

- *Type:* interface{}

---

##### `PermissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="PermissiveOutputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```go
func PermissiveOutputFirewallRulesInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedDockerOptionsInput`<sup>Optional</sup> <a name="PrivilegedDockerOptionsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput"></a>

```go
func PrivilegedDockerOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SharedCredentialsInput`<sup>Optional</sup> <a name="SharedCredentialsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput"></a>

```go
func SharedCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `VulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="VulnerableTlsCipherSuiteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```go
func VulnerableTlsCipherSuiteInput() interface{}
```

- *Type:* interface{}

---

##### `AcrAuthentication`<sup>Required</sup> <a name="AcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication"></a>

```go
func AcrAuthentication() interface{}
```

- *Type:* interface{}

---

##### `AgentSendUnutilizedMsg`<sup>Required</sup> <a name="AgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg"></a>

```go
func AgentSendUnutilizedMsg() interface{}
```

- *Type:* interface{}

---

##### `Baseline`<sup>Required</sup> <a name="Baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline"></a>

```go
func Baseline() interface{}
```

- *Type:* interface{}

---

##### `EdgeHubMemOptimize`<sup>Required</sup> <a name="EdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize"></a>

```go
func EdgeHubMemOptimize() interface{}
```

- *Type:* interface{}

---

##### `EdgeLoggingOption`<sup>Required</sup> <a name="EdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption"></a>

```go
func EdgeLoggingOption() interface{}
```

- *Type:* interface{}

---

##### `InconsistentModuleSettings`<sup>Required</sup> <a name="InconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings"></a>

```go
func InconsistentModuleSettings() interface{}
```

- *Type:* interface{}

---

##### `InstallAgent`<sup>Required</sup> <a name="InstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent"></a>

```go
func InstallAgent() interface{}
```

- *Type:* interface{}

---

##### `IpFilterDenyAll`<sup>Required</sup> <a name="IpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll"></a>

```go
func IpFilterDenyAll() interface{}
```

- *Type:* interface{}

---

##### `IpFilterPermissiveRule`<sup>Required</sup> <a name="IpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule"></a>

```go
func IpFilterPermissiveRule() interface{}
```

- *Type:* interface{}

---

##### `OpenPorts`<sup>Required</sup> <a name="OpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts"></a>

```go
func OpenPorts() interface{}
```

- *Type:* interface{}

---

##### `PermissiveFirewallPolicy`<sup>Required</sup> <a name="PermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy"></a>

```go
func PermissiveFirewallPolicy() interface{}
```

- *Type:* interface{}

---

##### `PermissiveInputFirewallRules`<sup>Required</sup> <a name="PermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules"></a>

```go
func PermissiveInputFirewallRules() interface{}
```

- *Type:* interface{}

---

##### `PermissiveOutputFirewallRules`<sup>Required</sup> <a name="PermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules"></a>

```go
func PermissiveOutputFirewallRules() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedDockerOptions`<sup>Required</sup> <a name="PrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions"></a>

```go
func PrivilegedDockerOptions() interface{}
```

- *Type:* interface{}

---

##### `SharedCredentials`<sup>Required</sup> <a name="SharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials"></a>

```go
func SharedCredentials() interface{}
```

- *Type:* interface{}

---

##### `VulnerableTlsCipherSuite`<sup>Required</sup> <a name="VulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite"></a>

```go
func VulnerableTlsCipherSuite() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue"></a>

```go
func InternalValue() IotSecuritySolutionRecommendationsEnabled
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/iotsecuritysolution"

iotsecuritysolution.NewIotSecuritySolutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecuritySolutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



