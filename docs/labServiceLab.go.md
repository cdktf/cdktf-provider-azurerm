# `labServiceLab` Submodule <a name="`labServiceLab` Submodule" id="@cdktf/provider-azurerm.labServiceLab"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceLab <a name="LabServiceLab" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab azurerm_lab_service_lab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLab(scope Construct, id *string, config LabServiceLabConfig) LabServiceLab
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown">PutAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting">PutConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster">PutRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown">ResetAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId">ResetLabPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster">ResetRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoShutdown` <a name="PutAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown"></a>

```go
func PutAutoShutdown(value LabServiceLabAutoShutdown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `PutConnectionSetting` <a name="PutConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting"></a>

```go
func PutConnectionSetting(value LabServiceLabConnectionSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork"></a>

```go
func PutNetwork(value LabServiceLabNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `PutRoster` <a name="PutRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster"></a>

```go
func PutRoster(value LabServiceLabRoster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity"></a>

```go
func PutSecurity(value LabServiceLabSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts"></a>

```go
func PutTimeouts(value LabServiceLabTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine"></a>

```go
func PutVirtualMachine(value LabServiceLabVirtualMachine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `ResetAutoShutdown` <a name="ResetAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown"></a>

```go
func ResetAutoShutdown()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId"></a>

```go
func ResetId()
```

##### `ResetLabPlanId` <a name="ResetLabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId"></a>

```go
func ResetLabPlanId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetRoster` <a name="ResetRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster"></a>

```go
func ResetRoster()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.LabServiceLab_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.LabServiceLab_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.LabServiceLab_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.LabServiceLab_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LabServiceLab to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LabServiceLab that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LabServiceLab to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown">AutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting">ConnectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster">Roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput">AutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput">ConnectionSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput">LabPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput">RosterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId">LabPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoShutdown`<sup>Required</sup> <a name="AutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown"></a>

```go
func AutoShutdown() LabServiceLabAutoShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a>

---

##### `ConnectionSetting`<sup>Required</sup> <a name="ConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting"></a>

```go
func ConnectionSetting() LabServiceLabConnectionSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network"></a>

```go
func Network() LabServiceLabNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a>

---

##### `Roster`<sup>Required</sup> <a name="Roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster"></a>

```go
func Roster() LabServiceLabRosterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security"></a>

```go
func Security() LabServiceLabSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts"></a>

```go
func Timeouts() LabServiceLabTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a>

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine"></a>

```go
func VirtualMachine() LabServiceLabVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a>

---

##### `AutoShutdownInput`<sup>Optional</sup> <a name="AutoShutdownInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput"></a>

```go
func AutoShutdownInput() LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `ConnectionSettingInput`<sup>Optional</sup> <a name="ConnectionSettingInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput"></a>

```go
func ConnectionSettingInput() LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabPlanIdInput`<sup>Optional</sup> <a name="LabPlanIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput"></a>

```go
func LabPlanIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput"></a>

```go
func NetworkInput() LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RosterInput`<sup>Optional</sup> <a name="RosterInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput"></a>

```go
func RosterInput() LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput"></a>

```go
func SecurityInput() LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput"></a>

```go
func VirtualMachineInput() LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LabPlanId`<sup>Required</sup> <a name="LabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId"></a>

```go
func LabPlanId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceLabAutoShutdown <a name="LabServiceLabAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabAutoShutdown {
	DisconnectDelay: *string,
	IdleDelay: *string,
	NoConnectDelay: *string,
	ShutdownOnIdle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay">DisconnectDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay">IdleDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay">NoConnectDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}. |

---

##### `DisconnectDelay`<sup>Optional</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay"></a>

```go
DisconnectDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

##### `IdleDelay`<sup>Optional</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay"></a>

```go
IdleDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

##### `NoConnectDelay`<sup>Optional</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay"></a>

```go
NoConnectDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

##### `ShutdownOnIdle`<sup>Optional</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle"></a>

```go
ShutdownOnIdle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

### LabServiceLabConfig <a name="LabServiceLabConfig" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionSetting: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabConnectionSetting,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Security: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabSecurity,
	Title: *string,
	VirtualMachine: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabVirtualMachine,
	AutoShutdown: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabAutoShutdown,
	Description: *string,
	Id: *string,
	LabPlanId: *string,
	Network: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabNetwork,
	Roster: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabRoster,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting">ConnectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown">AutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId">LabPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster">Roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionSetting`<sup>Required</sup> <a name="ConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting"></a>

```go
ConnectionSetting LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security"></a>

```go
Security LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine"></a>

```go
VirtualMachine LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `AutoShutdown`<sup>Optional</sup> <a name="AutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown"></a>

```go
AutoShutdown LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabPlanId`<sup>Optional</sup> <a name="LabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId"></a>

```go
LabPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network"></a>

```go
Network LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `Roster`<sup>Optional</sup> <a name="Roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster"></a>

```go
Roster LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts"></a>

```go
Timeouts LabServiceLabTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

### LabServiceLabConnectionSetting <a name="LabServiceLabConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabConnectionSetting {
	ClientRdpAccess: *string,
	ClientSshAccess: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess">ClientSshAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}. |

---

##### `ClientRdpAccess`<sup>Optional</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess"></a>

```go
ClientRdpAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

##### `ClientSshAccess`<sup>Optional</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess"></a>

```go
ClientSshAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

### LabServiceLabNetwork <a name="LabServiceLabNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabNetwork {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}. |

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

### LabServiceLabRoster <a name="LabServiceLabRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabRoster {
	ActiveDirectoryGroupId: *string,
	LmsInstance: *string,
	LtiClientId: *string,
	LtiContextId: *string,
	LtiRosterEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId">ActiveDirectoryGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance">LmsInstance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId">LtiClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId">LtiContextId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint">LtiRosterEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}. |

---

##### `ActiveDirectoryGroupId`<sup>Optional</sup> <a name="ActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId"></a>

```go
ActiveDirectoryGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

##### `LmsInstance`<sup>Optional</sup> <a name="LmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance"></a>

```go
LmsInstance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

##### `LtiClientId`<sup>Optional</sup> <a name="LtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId"></a>

```go
LtiClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

##### `LtiContextId`<sup>Optional</sup> <a name="LtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId"></a>

```go
LtiContextId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

##### `LtiRosterEndpoint`<sup>Optional</sup> <a name="LtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint"></a>

```go
LtiRosterEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

### LabServiceLabSecurity <a name="LabServiceLabSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabSecurity {
	OpenAccessEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled">OpenAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}. |

---

##### `OpenAccessEnabled`<sup>Required</sup> <a name="OpenAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled"></a>

```go
OpenAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

### LabServiceLabTimeouts <a name="LabServiceLabTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#create LabServiceLab#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#delete LabServiceLab#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#read LabServiceLab#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#update LabServiceLab#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

### LabServiceLabVirtualMachine <a name="LabServiceLabVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabVirtualMachine {
	AdminUser: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser,
	ImageReference: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference,
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabVirtualMachineSku,
	AdditionalCapabilityGpuDriversInstalled: interface{},
	CreateOption: *string,
	NonAdminUser: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser,
	SharedPasswordEnabled: interface{},
	UsageQuota: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser">AdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference">ImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled">AdditionalCapabilityGpuDriversInstalled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser">NonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | non_admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled">SharedPasswordEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota">UsageQuota</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}. |

---

##### `AdminUser`<sup>Required</sup> <a name="AdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser"></a>

```go
AdminUser LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

##### `ImageReference`<sup>Required</sup> <a name="ImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference"></a>

```go
ImageReference LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku"></a>

```go
Sku LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

##### `AdditionalCapabilityGpuDriversInstalled`<sup>Optional</sup> <a name="AdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled"></a>

```go
AdditionalCapabilityGpuDriversInstalled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

##### `NonAdminUser`<sup>Optional</sup> <a name="NonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser"></a>

```go
NonAdminUser LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

##### `SharedPasswordEnabled`<sup>Optional</sup> <a name="SharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled"></a>

```go
SharedPasswordEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

##### `UsageQuota`<sup>Optional</sup> <a name="UsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota"></a>

```go
UsageQuota *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

### LabServiceLabVirtualMachineAdminUser <a name="LabServiceLabVirtualMachineAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabVirtualMachineAdminUser {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineImageReference <a name="LabServiceLabVirtualMachineImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabVirtualMachineImageReference {
	Id: *string,
	Offer: *string,
	Publisher: *string,
	Sku: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#offer LabServiceLab#offer}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#sku LabServiceLab#sku}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#version LabServiceLab#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

### LabServiceLabVirtualMachineNonAdminUser <a name="LabServiceLabVirtualMachineNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabVirtualMachineNonAdminUser {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineSku <a name="LabServiceLabVirtualMachineSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

&labservicelab.LabServiceLabVirtualMachineSku {
	Capacity: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#name LabServiceLab#name}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceLabAutoShutdownOutputReference <a name="LabServiceLabAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabAutoShutdownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabAutoShutdownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay">ResetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay">ResetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay">ResetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle">ResetShutdownOnIdle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectDelay` <a name="ResetDisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay"></a>

```go
func ResetDisconnectDelay()
```

##### `ResetIdleDelay` <a name="ResetIdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay"></a>

```go
func ResetIdleDelay()
```

##### `ResetNoConnectDelay` <a name="ResetNoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay"></a>

```go
func ResetNoConnectDelay()
```

##### `ResetShutdownOnIdle` <a name="ResetShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```go
func ResetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput">DisconnectDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput">IdleDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput">NoConnectDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput">ShutdownOnIdleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay">DisconnectDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay">IdleDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay">NoConnectDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisconnectDelayInput`<sup>Optional</sup> <a name="DisconnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```go
func DisconnectDelayInput() *string
```

- *Type:* *string

---

##### `IdleDelayInput`<sup>Optional</sup> <a name="IdleDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput"></a>

```go
func IdleDelayInput() *string
```

- *Type:* *string

---

##### `NoConnectDelayInput`<sup>Optional</sup> <a name="NoConnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```go
func NoConnectDelayInput() *string
```

- *Type:* *string

---

##### `ShutdownOnIdleInput`<sup>Optional</sup> <a name="ShutdownOnIdleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```go
func ShutdownOnIdleInput() *string
```

- *Type:* *string

---

##### `DisconnectDelay`<sup>Required</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay"></a>

```go
func DisconnectDelay() *string
```

- *Type:* *string

---

##### `IdleDelay`<sup>Required</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay"></a>

```go
func IdleDelay() *string
```

- *Type:* *string

---

##### `NoConnectDelay`<sup>Required</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay"></a>

```go
func NoConnectDelay() *string
```

- *Type:* *string

---

##### `ShutdownOnIdle`<sup>Required</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```go
func ShutdownOnIdle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---


### LabServiceLabConnectionSettingOutputReference <a name="LabServiceLabConnectionSettingOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabConnectionSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabConnectionSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess">ResetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess">ResetClientSshAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientRdpAccess` <a name="ResetClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess"></a>

```go
func ResetClientRdpAccess()
```

##### `ResetClientSshAccess` <a name="ResetClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess"></a>

```go
func ResetClientSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput">ClientRdpAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput">ClientSshAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess">ClientSshAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientRdpAccessInput`<sup>Optional</sup> <a name="ClientRdpAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput"></a>

```go
func ClientRdpAccessInput() *string
```

- *Type:* *string

---

##### `ClientSshAccessInput`<sup>Optional</sup> <a name="ClientSshAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput"></a>

```go
func ClientSshAccessInput() *string
```

- *Type:* *string

---

##### `ClientRdpAccess`<sup>Required</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess"></a>

```go
func ClientRdpAccess() *string
```

- *Type:* *string

---

##### `ClientSshAccess`<sup>Required</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess"></a>

```go
func ClientSshAccess() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabConnectionSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---


### LabServiceLabNetworkOutputReference <a name="LabServiceLabNetworkOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId">PublicIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `PublicIpId`<sup>Required</sup> <a name="PublicIpId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId"></a>

```go
func PublicIpId() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---


### LabServiceLabRosterOutputReference <a name="LabServiceLabRosterOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabRosterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabRosterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId">ResetActiveDirectoryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance">ResetLmsInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId">ResetLtiClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId">ResetLtiContextId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint">ResetLtiRosterEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryGroupId` <a name="ResetActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId"></a>

```go
func ResetActiveDirectoryGroupId()
```

##### `ResetLmsInstance` <a name="ResetLmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance"></a>

```go
func ResetLmsInstance()
```

##### `ResetLtiClientId` <a name="ResetLtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId"></a>

```go
func ResetLtiClientId()
```

##### `ResetLtiContextId` <a name="ResetLtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId"></a>

```go
func ResetLtiContextId()
```

##### `ResetLtiRosterEndpoint` <a name="ResetLtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint"></a>

```go
func ResetLtiRosterEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput">ActiveDirectoryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput">LmsInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput">LtiClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput">LtiContextIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput">LtiRosterEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId">ActiveDirectoryGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance">LmsInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId">LtiClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId">LtiContextId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint">LtiRosterEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryGroupIdInput`<sup>Optional</sup> <a name="ActiveDirectoryGroupIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput"></a>

```go
func ActiveDirectoryGroupIdInput() *string
```

- *Type:* *string

---

##### `LmsInstanceInput`<sup>Optional</sup> <a name="LmsInstanceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput"></a>

```go
func LmsInstanceInput() *string
```

- *Type:* *string

---

##### `LtiClientIdInput`<sup>Optional</sup> <a name="LtiClientIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput"></a>

```go
func LtiClientIdInput() *string
```

- *Type:* *string

---

##### `LtiContextIdInput`<sup>Optional</sup> <a name="LtiContextIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput"></a>

```go
func LtiContextIdInput() *string
```

- *Type:* *string

---

##### `LtiRosterEndpointInput`<sup>Optional</sup> <a name="LtiRosterEndpointInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput"></a>

```go
func LtiRosterEndpointInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryGroupId`<sup>Required</sup> <a name="ActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId"></a>

```go
func ActiveDirectoryGroupId() *string
```

- *Type:* *string

---

##### `LmsInstance`<sup>Required</sup> <a name="LmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance"></a>

```go
func LmsInstance() *string
```

- *Type:* *string

---

##### `LtiClientId`<sup>Required</sup> <a name="LtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId"></a>

```go
func LtiClientId() *string
```

- *Type:* *string

---

##### `LtiContextId`<sup>Required</sup> <a name="LtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId"></a>

```go
func LtiContextId() *string
```

- *Type:* *string

---

##### `LtiRosterEndpoint`<sup>Required</sup> <a name="LtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint"></a>

```go
func LtiRosterEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabRoster
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---


### LabServiceLabSecurityOutputReference <a name="LabServiceLabSecurityOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode">RegistrationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput">OpenAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled">OpenAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode"></a>

```go
func RegistrationCode() *string
```

- *Type:* *string

---

##### `OpenAccessEnabledInput`<sup>Optional</sup> <a name="OpenAccessEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput"></a>

```go
func OpenAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OpenAccessEnabled`<sup>Required</sup> <a name="OpenAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled"></a>

```go
func OpenAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---


### LabServiceLabTimeoutsOutputReference <a name="LabServiceLabTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LabServiceLabVirtualMachineAdminUserOutputReference <a name="LabServiceLabVirtualMachineAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabVirtualMachineAdminUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabVirtualMachineAdminUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---


### LabServiceLabVirtualMachineImageReferenceOutputReference <a name="LabServiceLabVirtualMachineImageReferenceOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabVirtualMachineImageReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabVirtualMachineImageReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer"></a>

```go
func ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher"></a>

```go
func ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku"></a>

```go
func ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---


### LabServiceLabVirtualMachineNonAdminUserOutputReference <a name="LabServiceLabVirtualMachineNonAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabVirtualMachineNonAdminUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabVirtualMachineNonAdminUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---


### LabServiceLabVirtualMachineOutputReference <a name="LabServiceLabVirtualMachineOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabVirtualMachineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabVirtualMachineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser">PutAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference">PutImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser">PutNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled">ResetAdditionalCapabilityGpuDriversInstalled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser">ResetNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled">ResetSharedPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota">ResetUsageQuota</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUser` <a name="PutAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser"></a>

```go
func PutAdminUser(value LabServiceLabVirtualMachineAdminUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `PutImageReference` <a name="PutImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference"></a>

```go
func PutImageReference(value LabServiceLabVirtualMachineImageReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `PutNonAdminUser` <a name="PutNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser"></a>

```go
func PutNonAdminUser(value LabServiceLabVirtualMachineNonAdminUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku"></a>

```go
func PutSku(value LabServiceLabVirtualMachineSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `ResetAdditionalCapabilityGpuDriversInstalled` <a name="ResetAdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled"></a>

```go
func ResetAdditionalCapabilityGpuDriversInstalled()
```

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption"></a>

```go
func ResetCreateOption()
```

##### `ResetNonAdminUser` <a name="ResetNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser"></a>

```go
func ResetNonAdminUser()
```

##### `ResetSharedPasswordEnabled` <a name="ResetSharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled"></a>

```go
func ResetSharedPasswordEnabled()
```

##### `ResetUsageQuota` <a name="ResetUsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota"></a>

```go
func ResetUsageQuota()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser">AdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference">ImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser">NonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput">AdditionalCapabilityGpuDriversInstalledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput">AdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput">ImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput">NonAdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput">SharedPasswordEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput">UsageQuotaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled">AdditionalCapabilityGpuDriversInstalled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled">SharedPasswordEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota">UsageQuota</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUser`<sup>Required</sup> <a name="AdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser"></a>

```go
func AdminUser() LabServiceLabVirtualMachineAdminUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a>

---

##### `ImageReference`<sup>Required</sup> <a name="ImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference"></a>

```go
func ImageReference() LabServiceLabVirtualMachineImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a>

---

##### `NonAdminUser`<sup>Required</sup> <a name="NonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser"></a>

```go
func NonAdminUser() LabServiceLabVirtualMachineNonAdminUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku"></a>

```go
func Sku() LabServiceLabVirtualMachineSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a>

---

##### `AdditionalCapabilityGpuDriversInstalledInput`<sup>Optional</sup> <a name="AdditionalCapabilityGpuDriversInstalledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput"></a>

```go
func AdditionalCapabilityGpuDriversInstalledInput() interface{}
```

- *Type:* interface{}

---

##### `AdminUserInput`<sup>Optional</sup> <a name="AdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput"></a>

```go
func AdminUserInput() LabServiceLabVirtualMachineAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `ImageReferenceInput`<sup>Optional</sup> <a name="ImageReferenceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput"></a>

```go
func ImageReferenceInput() LabServiceLabVirtualMachineImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `NonAdminUserInput`<sup>Optional</sup> <a name="NonAdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput"></a>

```go
func NonAdminUserInput() LabServiceLabVirtualMachineNonAdminUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `SharedPasswordEnabledInput`<sup>Optional</sup> <a name="SharedPasswordEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput"></a>

```go
func SharedPasswordEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput"></a>

```go
func SkuInput() LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `UsageQuotaInput`<sup>Optional</sup> <a name="UsageQuotaInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput"></a>

```go
func UsageQuotaInput() *string
```

- *Type:* *string

---

##### `AdditionalCapabilityGpuDriversInstalled`<sup>Required</sup> <a name="AdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled"></a>

```go
func AdditionalCapabilityGpuDriversInstalled() interface{}
```

- *Type:* interface{}

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `SharedPasswordEnabled`<sup>Required</sup> <a name="SharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled"></a>

```go
func SharedPasswordEnabled() interface{}
```

- *Type:* interface{}

---

##### `UsageQuota`<sup>Required</sup> <a name="UsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota"></a>

```go
func UsageQuota() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---


### LabServiceLabVirtualMachineSkuOutputReference <a name="LabServiceLabVirtualMachineSkuOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labservicelab"

labservicelab.NewLabServiceLabVirtualMachineSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServiceLabVirtualMachineSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServiceLabVirtualMachineSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---



