# `virtualMachineImplicitDataDiskFromSource` Submodule <a name="`virtualMachineImplicitDataDiskFromSource` Submodule" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineImplicitDataDiskFromSource <a name="VirtualMachineImplicitDataDiskFromSource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source azurerm_virtual_machine_implicit_data_disk_from_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.NewVirtualMachineImplicitDataDiskFromSource(scope Construct, id *string, config VirtualMachineImplicitDataDiskFromSourceConfig) VirtualMachineImplicitDataDiskFromSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig">VirtualMachineImplicitDataDiskFromSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled">ResetWriteAcceleratorEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts"></a>

```go
func PutTimeouts(value VirtualMachineImplicitDataDiskFromSourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

---

##### `ResetCaching` <a name="ResetCaching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetCaching"></a>

```go
func ResetCaching()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWriteAcceleratorEnabled` <a name="ResetWriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.resetWriteAcceleratorEnabled"></a>

```go
func ResetWriteAcceleratorEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualMachineImplicitDataDiskFromSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualMachineImplicitDataDiskFromSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualMachineImplicitDataDiskFromSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineImplicitDataDiskFromSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput">CachingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput">CreateOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput">LunInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput">WriteAcceleratorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun">Lun</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeouts"></a>

```go
func Timeouts() VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference">VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.cachingInput"></a>

```go
func CachingInput() *string
```

- *Type:* *string

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOptionInput"></a>

```go
func CreateOptionInput() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LunInput`<sup>Optional</sup> <a name="LunInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lunInput"></a>

```go
func LunInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabledInput`<sup>Optional</sup> <a name="WriteAcceleratorEnabledInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabledInput"></a>

```go
func WriteAcceleratorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.lun"></a>

```go
func Lun() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

##### `WriteAcceleratorEnabled`<sup>Required</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.writeAcceleratorEnabled"></a>

```go
func WriteAcceleratorEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineImplicitDataDiskFromSourceConfig <a name="VirtualMachineImplicitDataDiskFromSourceConfig" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

&virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CreateOption: *string,
	DiskSizeGb: *f64,
	Lun: *f64,
	Name: *string,
	SourceResourceId: *string,
	VirtualMachineId: *string,
	Caching: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts,
	WriteAcceleratorEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption">CreateOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun">Lun</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching">Caching</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled">WriteAcceleratorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.createOption"></a>

```go
CreateOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create_option VirtualMachineImplicitDataDiskFromSource#create_option}.

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#disk_size_gb VirtualMachineImplicitDataDiskFromSource#disk_size_gb}.

---

##### `Lun`<sup>Required</sup> <a name="Lun" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.lun"></a>

```go
Lun *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#lun VirtualMachineImplicitDataDiskFromSource#lun}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#name VirtualMachineImplicitDataDiskFromSource#name}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#source_resource_id VirtualMachineImplicitDataDiskFromSource#source_resource_id}.

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#virtual_machine_id VirtualMachineImplicitDataDiskFromSource#virtual_machine_id}.

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.caching"></a>

```go
Caching *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#caching VirtualMachineImplicitDataDiskFromSource#caching}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#id VirtualMachineImplicitDataDiskFromSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.timeouts"></a>

```go
Timeouts VirtualMachineImplicitDataDiskFromSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts">VirtualMachineImplicitDataDiskFromSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#timeouts VirtualMachineImplicitDataDiskFromSource#timeouts}

---

##### `WriteAcceleratorEnabled`<sup>Optional</sup> <a name="WriteAcceleratorEnabled" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceConfig.property.writeAcceleratorEnabled"></a>

```go
WriteAcceleratorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#write_accelerator_enabled VirtualMachineImplicitDataDiskFromSource#write_accelerator_enabled}.

---

### VirtualMachineImplicitDataDiskFromSourceTimeouts <a name="VirtualMachineImplicitDataDiskFromSourceTimeouts" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

&virtualmachineimplicitdatadiskfromsource.VirtualMachineImplicitDataDiskFromSourceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#create VirtualMachineImplicitDataDiskFromSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#delete VirtualMachineImplicitDataDiskFromSource#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#read VirtualMachineImplicitDataDiskFromSource#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/virtual_machine_implicit_data_disk_from_source#update VirtualMachineImplicitDataDiskFromSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference <a name="VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/virtualmachineimplicitdatadiskfromsource"

virtualmachineimplicitdatadiskfromsource.NewVirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualMachineImplicitDataDiskFromSource.VirtualMachineImplicitDataDiskFromSourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



