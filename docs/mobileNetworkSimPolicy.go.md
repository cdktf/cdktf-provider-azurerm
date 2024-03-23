# `mobileNetworkSimPolicy` Submodule <a name="`mobileNetworkSimPolicy` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSimPolicy <a name="MobileNetworkSimPolicy" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicy(scope Construct, id *string, config MobileNetworkSimPolicyConfig) MobileNetworkSimPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig">MobileNetworkSimPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig">MobileNetworkSimPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice">PutSlice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate">PutUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRatFrequencySelectionPriorityIndex">ResetRatFrequencySelectionPriorityIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRegistrationTimerInSeconds">ResetRegistrationTimerInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSlice` <a name="PutSlice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice"></a>

```go
func PutSlice(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts"></a>

```go
func PutTimeouts(value MobileNetworkSimPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a>

---

##### `PutUserEquipmentAggregateMaximumBitRate` <a name="PutUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate"></a>

```go
func PutUserEquipmentAggregateMaximumBitRate(value MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRatFrequencySelectionPriorityIndex` <a name="ResetRatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRatFrequencySelectionPriorityIndex"></a>

```go
func ResetRatFrequencySelectionPriorityIndex()
```

##### `ResetRegistrationTimerInSeconds` <a name="ResetRegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRegistrationTimerInSeconds"></a>

```go
func ResetRegistrationTimerInSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.MobileNetworkSimPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.MobileNetworkSimPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.MobileNetworkSimPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.MobileNetworkSimPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MobileNetworkSimPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MobileNetworkSimPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSimPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.slice">Slice</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList">MobileNetworkSimPolicySliceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference">MobileNetworkSimPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate">UserEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceIdInput">DefaultSliceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndexInput">RatFrequencySelectionPriorityIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSecondsInput">RegistrationTimerInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.sliceInput">SliceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRateInput">UserEquipmentAggregateMaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceId">DefaultSliceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex">RatFrequencySelectionPriorityIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSeconds">RegistrationTimerInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Slice`<sup>Required</sup> <a name="Slice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.slice"></a>

```go
func Slice() MobileNetworkSimPolicySliceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList">MobileNetworkSimPolicySliceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeouts"></a>

```go
func Timeouts() MobileNetworkSimPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference">MobileNetworkSimPolicyTimeoutsOutputReference</a>

---

##### `UserEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="UserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate"></a>

```go
func UserEquipmentAggregateMaximumBitRate() MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference</a>

---

##### `DefaultSliceIdInput`<sup>Optional</sup> <a name="DefaultSliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceIdInput"></a>

```go
func DefaultSliceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkIdInput"></a>

```go
func MobileNetworkIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RatFrequencySelectionPriorityIndexInput`<sup>Optional</sup> <a name="RatFrequencySelectionPriorityIndexInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndexInput"></a>

```go
func RatFrequencySelectionPriorityIndexInput() *f64
```

- *Type:* *f64

---

##### `RegistrationTimerInSecondsInput`<sup>Optional</sup> <a name="RegistrationTimerInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSecondsInput"></a>

```go
func RegistrationTimerInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SliceInput`<sup>Optional</sup> <a name="SliceInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.sliceInput"></a>

```go
func SliceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserEquipmentAggregateMaximumBitRateInput`<sup>Optional</sup> <a name="UserEquipmentAggregateMaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRateInput"></a>

```go
func UserEquipmentAggregateMaximumBitRateInput() MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---

##### `DefaultSliceId`<sup>Required</sup> <a name="DefaultSliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceId"></a>

```go
func DefaultSliceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkId"></a>

```go
func MobileNetworkId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RatFrequencySelectionPriorityIndex`<sup>Required</sup> <a name="RatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex"></a>

```go
func RatFrequencySelectionPriorityIndex() *f64
```

- *Type:* *f64

---

##### `RegistrationTimerInSeconds`<sup>Required</sup> <a name="RegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSeconds"></a>

```go
func RegistrationTimerInSeconds() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSimPolicyConfig <a name="MobileNetworkSimPolicyConfig" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultSliceId: *string,
	Location: *string,
	MobileNetworkId: *string,
	Name: *string,
	Slice: interface{},
	UserEquipmentAggregateMaximumBitRate: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate,
	Id: *string,
	RatFrequencySelectionPriorityIndex: *f64,
	RegistrationTimerInSeconds: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.defaultSliceId">DefaultSliceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_slice_id MobileNetworkSimPolicy#default_slice_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#location MobileNetworkSimPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#mobile_network_id MobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#name MobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.slice">Slice</a></code> | <code>interface{}</code> | slice block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.userEquipmentAggregateMaximumBitRate">UserEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | user_equipment_aggregate_maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#id MobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.ratFrequencySelectionPriorityIndex">RatFrequencySelectionPriorityIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#rat_frequency_selection_priority_index MobileNetworkSimPolicy#rat_frequency_selection_priority_index}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.registrationTimerInSeconds">RegistrationTimerInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#registration_timer_in_seconds MobileNetworkSimPolicy#registration_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#tags MobileNetworkSimPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultSliceId`<sup>Required</sup> <a name="DefaultSliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.defaultSliceId"></a>

```go
DefaultSliceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_slice_id MobileNetworkSimPolicy#default_slice_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#location MobileNetworkSimPolicy#location}.

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.mobileNetworkId"></a>

```go
MobileNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#mobile_network_id MobileNetworkSimPolicy#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#name MobileNetworkSimPolicy#name}.

---

##### `Slice`<sup>Required</sup> <a name="Slice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.slice"></a>

```go
Slice interface{}
```

- *Type:* interface{}

slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#slice MobileNetworkSimPolicy#slice}

---

##### `UserEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="UserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.userEquipmentAggregateMaximumBitRate"></a>

```go
UserEquipmentAggregateMaximumBitRate MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

user_equipment_aggregate_maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#user_equipment_aggregate_maximum_bit_rate MobileNetworkSimPolicy#user_equipment_aggregate_maximum_bit_rate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#id MobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RatFrequencySelectionPriorityIndex`<sup>Optional</sup> <a name="RatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.ratFrequencySelectionPriorityIndex"></a>

```go
RatFrequencySelectionPriorityIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#rat_frequency_selection_priority_index MobileNetworkSimPolicy#rat_frequency_selection_priority_index}.

---

##### `RegistrationTimerInSeconds`<sup>Optional</sup> <a name="RegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.registrationTimerInSeconds"></a>

```go
RegistrationTimerInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#registration_timer_in_seconds MobileNetworkSimPolicy#registration_timer_in_seconds}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#tags MobileNetworkSimPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.timeouts"></a>

```go
Timeouts MobileNetworkSimPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#timeouts MobileNetworkSimPolicy#timeouts}

---

### MobileNetworkSimPolicySlice <a name="MobileNetworkSimPolicySlice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicySlice {
	DataNetwork: interface{},
	DefaultDataNetworkId: *string,
	SliceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.dataNetwork">DataNetwork</a></code> | <code>interface{}</code> | data_network block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.defaultDataNetworkId">DefaultDataNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_data_network_id MobileNetworkSimPolicy#default_data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.sliceId">SliceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#slice_id MobileNetworkSimPolicy#slice_id}. |

---

##### `DataNetwork`<sup>Required</sup> <a name="DataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.dataNetwork"></a>

```go
DataNetwork interface{}
```

- *Type:* interface{}

data_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#data_network MobileNetworkSimPolicy#data_network}

---

##### `DefaultDataNetworkId`<sup>Required</sup> <a name="DefaultDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.defaultDataNetworkId"></a>

```go
DefaultDataNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_data_network_id MobileNetworkSimPolicy#default_data_network_id}.

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.sliceId"></a>

```go
SliceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#slice_id MobileNetworkSimPolicy#slice_id}.

---

### MobileNetworkSimPolicySliceDataNetwork <a name="MobileNetworkSimPolicySliceDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicySliceDataNetwork {
	AllowedServicesIds: *[]*string,
	DataNetworkId: *string,
	QosIndicator: *f64,
	SessionAggregateMaximumBitRate: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate,
	AdditionalAllowedSessionTypes: *[]*string,
	AllocationAndRetentionPriorityLevel: *f64,
	DefaultSessionType: *string,
	MaxBufferedPackets: *f64,
	PreemptionCapability: *string,
	PreemptionVulnerability: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allowedServicesIds">AllowedServicesIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#allowed_services_ids MobileNetworkSimPolicy#allowed_services_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.dataNetworkId">DataNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#data_network_id MobileNetworkSimPolicy#data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.qosIndicator">QosIndicator</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#qos_indicator MobileNetworkSimPolicy#qos_indicator}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.sessionAggregateMaximumBitRate">SessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | session_aggregate_maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.additionalAllowedSessionTypes">AdditionalAllowedSessionTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#additional_allowed_session_types MobileNetworkSimPolicy#additional_allowed_session_types}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#allocation_and_retention_priority_level MobileNetworkSimPolicy#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.defaultSessionType">DefaultSessionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_session_type MobileNetworkSimPolicy#default_session_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.maxBufferedPackets">MaxBufferedPackets</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#max_buffered_packets MobileNetworkSimPolicy#max_buffered_packets}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionCapability">PreemptionCapability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#preemption_capability MobileNetworkSimPolicy#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#preemption_vulnerability MobileNetworkSimPolicy#preemption_vulnerability}. |

---

##### `AllowedServicesIds`<sup>Required</sup> <a name="AllowedServicesIds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allowedServicesIds"></a>

```go
AllowedServicesIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#allowed_services_ids MobileNetworkSimPolicy#allowed_services_ids}.

---

##### `DataNetworkId`<sup>Required</sup> <a name="DataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.dataNetworkId"></a>

```go
DataNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#data_network_id MobileNetworkSimPolicy#data_network_id}.

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.qosIndicator"></a>

```go
QosIndicator *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#qos_indicator MobileNetworkSimPolicy#qos_indicator}.

---

##### `SessionAggregateMaximumBitRate`<sup>Required</sup> <a name="SessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.sessionAggregateMaximumBitRate"></a>

```go
SessionAggregateMaximumBitRate MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

session_aggregate_maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#session_aggregate_maximum_bit_rate MobileNetworkSimPolicy#session_aggregate_maximum_bit_rate}

---

##### `AdditionalAllowedSessionTypes`<sup>Optional</sup> <a name="AdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.additionalAllowedSessionTypes"></a>

```go
AdditionalAllowedSessionTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#additional_allowed_session_types MobileNetworkSimPolicy#additional_allowed_session_types}.

---

##### `AllocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allocationAndRetentionPriorityLevel"></a>

```go
AllocationAndRetentionPriorityLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#allocation_and_retention_priority_level MobileNetworkSimPolicy#allocation_and_retention_priority_level}.

---

##### `DefaultSessionType`<sup>Optional</sup> <a name="DefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.defaultSessionType"></a>

```go
DefaultSessionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#default_session_type MobileNetworkSimPolicy#default_session_type}.

---

##### `MaxBufferedPackets`<sup>Optional</sup> <a name="MaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.maxBufferedPackets"></a>

```go
MaxBufferedPackets *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#max_buffered_packets MobileNetworkSimPolicy#max_buffered_packets}.

---

##### `PreemptionCapability`<sup>Optional</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionCapability"></a>

```go
PreemptionCapability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#preemption_capability MobileNetworkSimPolicy#preemption_capability}.

---

##### `PreemptionVulnerability`<sup>Optional</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionVulnerability"></a>

```go
PreemptionVulnerability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#preemption_vulnerability MobileNetworkSimPolicy#preemption_vulnerability}.

---

### MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate <a name="MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate {
	Downlink: *string,
	Uplink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.downlink">Downlink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.uplink">Uplink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.downlink"></a>

```go
Downlink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.uplink"></a>

```go
Uplink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}.

---

### MobileNetworkSimPolicyTimeouts <a name="MobileNetworkSimPolicyTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#create MobileNetworkSimPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#delete MobileNetworkSimPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#read MobileNetworkSimPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#update MobileNetworkSimPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#create MobileNetworkSimPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#delete MobileNetworkSimPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#read MobileNetworkSimPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#update MobileNetworkSimPolicy#update}.

---

### MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate <a name="MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

&mobilenetworksimpolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate {
	Downlink: *string,
	Uplink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.downlink">Downlink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.uplink">Uplink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.downlink"></a>

```go
Downlink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.uplink"></a>

```go
Uplink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSimPolicySliceDataNetworkList <a name="MobileNetworkSimPolicySliceDataNetworkList" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicySliceDataNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MobileNetworkSimPolicySliceDataNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get"></a>

```go
func Get(index *f64) MobileNetworkSimPolicySliceDataNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimPolicySliceDataNetworkOutputReference <a name="MobileNetworkSimPolicySliceDataNetworkOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicySliceDataNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MobileNetworkSimPolicySliceDataNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate">PutSessionAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAdditionalAllowedSessionTypes">ResetAdditionalAllowedSessionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAllocationAndRetentionPriorityLevel">ResetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetDefaultSessionType">ResetDefaultSessionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetMaxBufferedPackets">ResetMaxBufferedPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionCapability">ResetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionVulnerability">ResetPreemptionVulnerability</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionAggregateMaximumBitRate` <a name="PutSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate"></a>

```go
func PutSessionAggregateMaximumBitRate(value MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---

##### `ResetAdditionalAllowedSessionTypes` <a name="ResetAdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAdditionalAllowedSessionTypes"></a>

```go
func ResetAdditionalAllowedSessionTypes()
```

##### `ResetAllocationAndRetentionPriorityLevel` <a name="ResetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```go
func ResetAllocationAndRetentionPriorityLevel()
```

##### `ResetDefaultSessionType` <a name="ResetDefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetDefaultSessionType"></a>

```go
func ResetDefaultSessionType()
```

##### `ResetMaxBufferedPackets` <a name="ResetMaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetMaxBufferedPackets"></a>

```go
func ResetMaxBufferedPackets()
```

##### `ResetPreemptionCapability` <a name="ResetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionCapability"></a>

```go
func ResetPreemptionCapability()
```

##### `ResetPreemptionVulnerability` <a name="ResetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionVulnerability"></a>

```go
func ResetPreemptionVulnerability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate">SessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypesInput">AdditionalAllowedSessionTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevelInput">AllocationAndRetentionPriorityLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIdsInput">AllowedServicesIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkIdInput">DataNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionTypeInput">DefaultSessionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPacketsInput">MaxBufferedPacketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapabilityInput">PreemptionCapabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerabilityInput">PreemptionVulnerabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicatorInput">QosIndicatorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRateInput">SessionAggregateMaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes">AdditionalAllowedSessionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds">AllowedServicesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId">DataNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType">DefaultSessionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets">MaxBufferedPackets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability">PreemptionCapability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator">QosIndicator</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionAggregateMaximumBitRate`<sup>Required</sup> <a name="SessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate"></a>

```go
func SessionAggregateMaximumBitRate() MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference</a>

---

##### `AdditionalAllowedSessionTypesInput`<sup>Optional</sup> <a name="AdditionalAllowedSessionTypesInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypesInput"></a>

```go
func AdditionalAllowedSessionTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```go
func AllocationAndRetentionPriorityLevelInput() *f64
```

- *Type:* *f64

---

##### `AllowedServicesIdsInput`<sup>Optional</sup> <a name="AllowedServicesIdsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIdsInput"></a>

```go
func AllowedServicesIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataNetworkIdInput`<sup>Optional</sup> <a name="DataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkIdInput"></a>

```go
func DataNetworkIdInput() *string
```

- *Type:* *string

---

##### `DefaultSessionTypeInput`<sup>Optional</sup> <a name="DefaultSessionTypeInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionTypeInput"></a>

```go
func DefaultSessionTypeInput() *string
```

- *Type:* *string

---

##### `MaxBufferedPacketsInput`<sup>Optional</sup> <a name="MaxBufferedPacketsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPacketsInput"></a>

```go
func MaxBufferedPacketsInput() *f64
```

- *Type:* *f64

---

##### `PreemptionCapabilityInput`<sup>Optional</sup> <a name="PreemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapabilityInput"></a>

```go
func PreemptionCapabilityInput() *string
```

- *Type:* *string

---

##### `PreemptionVulnerabilityInput`<sup>Optional</sup> <a name="PreemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerabilityInput"></a>

```go
func PreemptionVulnerabilityInput() *string
```

- *Type:* *string

---

##### `QosIndicatorInput`<sup>Optional</sup> <a name="QosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicatorInput"></a>

```go
func QosIndicatorInput() *f64
```

- *Type:* *f64

---

##### `SessionAggregateMaximumBitRateInput`<sup>Optional</sup> <a name="SessionAggregateMaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRateInput"></a>

```go
func SessionAggregateMaximumBitRateInput() MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---

##### `AdditionalAllowedSessionTypes`<sup>Required</sup> <a name="AdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes"></a>

```go
func AdditionalAllowedSessionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```go
func AllocationAndRetentionPriorityLevel() *f64
```

- *Type:* *f64

---

##### `AllowedServicesIds`<sup>Required</sup> <a name="AllowedServicesIds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds"></a>

```go
func AllowedServicesIds() *[]*string
```

- *Type:* *[]*string

---

##### `DataNetworkId`<sup>Required</sup> <a name="DataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId"></a>

```go
func DataNetworkId() *string
```

- *Type:* *string

---

##### `DefaultSessionType`<sup>Required</sup> <a name="DefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType"></a>

```go
func DefaultSessionType() *string
```

- *Type:* *string

---

##### `MaxBufferedPackets`<sup>Required</sup> <a name="MaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets"></a>

```go
func MaxBufferedPackets() *f64
```

- *Type:* *f64

---

##### `PreemptionCapability`<sup>Required</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability"></a>

```go
func PreemptionCapability() *string
```

- *Type:* *string

---

##### `PreemptionVulnerability`<sup>Required</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability"></a>

```go
func PreemptionVulnerability() *string
```

- *Type:* *string

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator"></a>

```go
func QosIndicator() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference <a name="MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlinkInput"></a>

```go
func DownlinkInput() *string
```

- *Type:* *string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplinkInput"></a>

```go
func UplinkInput() *string
```

- *Type:* *string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink"></a>

```go
func Downlink() *string
```

- *Type:* *string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink"></a>

```go
func Uplink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```go
func InternalValue() MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---


### MobileNetworkSimPolicySliceList <a name="MobileNetworkSimPolicySliceList" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicySliceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MobileNetworkSimPolicySliceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get"></a>

```go
func Get(index *f64) MobileNetworkSimPolicySliceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimPolicySliceOutputReference <a name="MobileNetworkSimPolicySliceOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicySliceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MobileNetworkSimPolicySliceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork">PutDataNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataNetwork` <a name="PutDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork"></a>

```go
func PutDataNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetwork">DataNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList">MobileNetworkSimPolicySliceDataNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetworkInput">DataNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkIdInput">DefaultDataNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceIdInput">SliceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId">DefaultDataNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceId">SliceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataNetwork`<sup>Required</sup> <a name="DataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetwork"></a>

```go
func DataNetwork() MobileNetworkSimPolicySliceDataNetworkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList">MobileNetworkSimPolicySliceDataNetworkList</a>

---

##### `DataNetworkInput`<sup>Optional</sup> <a name="DataNetworkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetworkInput"></a>

```go
func DataNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultDataNetworkIdInput`<sup>Optional</sup> <a name="DefaultDataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkIdInput"></a>

```go
func DefaultDataNetworkIdInput() *string
```

- *Type:* *string

---

##### `SliceIdInput`<sup>Optional</sup> <a name="SliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceIdInput"></a>

```go
func SliceIdInput() *string
```

- *Type:* *string

---

##### `DefaultDataNetworkId`<sup>Required</sup> <a name="DefaultDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId"></a>

```go
func DefaultDataNetworkId() *string
```

- *Type:* *string

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceId"></a>

```go
func SliceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimPolicyTimeoutsOutputReference <a name="MobileNetworkSimPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkSimPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference <a name="MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mobilenetworksimpolicy"

mobilenetworksimpolicy.NewMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlinkInput"></a>

```go
func DownlinkInput() *string
```

- *Type:* *string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplinkInput"></a>

```go
func UplinkInput() *string
```

- *Type:* *string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink"></a>

```go
func Downlink() *string
```

- *Type:* *string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink"></a>

```go
func Uplink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```go
func InternalValue() MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---



