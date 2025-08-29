# `stackHciVirtualHardDisk` Submodule <a name="`stackHciVirtualHardDisk` Submodule" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciVirtualHardDisk <a name="StackHciVirtualHardDisk" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.NewStackHciVirtualHardDisk(scope Construct, id *string, config StackHciVirtualHardDiskConfig) StackHciVirtualHardDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig">StackHciVirtualHardDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes">ResetBlockSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat">ResetDiskFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled">ResetDynamicEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration">ResetHypervGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes">ResetLogicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes">ResetPhysicalSectorInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId">ResetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts"></a>

```go
func PutTimeouts(value StackHciVirtualHardDiskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

---

##### `ResetBlockSizeInBytes` <a name="ResetBlockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetBlockSizeInBytes"></a>

```go
func ResetBlockSizeInBytes()
```

##### `ResetDiskFileFormat` <a name="ResetDiskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDiskFileFormat"></a>

```go
func ResetDiskFileFormat()
```

##### `ResetDynamicEnabled` <a name="ResetDynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetDynamicEnabled"></a>

```go
func ResetDynamicEnabled()
```

##### `ResetHypervGeneration` <a name="ResetHypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetHypervGeneration"></a>

```go
func ResetHypervGeneration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetLogicalSectorInBytes` <a name="ResetLogicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetLogicalSectorInBytes"></a>

```go
func ResetLogicalSectorInBytes()
```

##### `ResetPhysicalSectorInBytes` <a name="ResetPhysicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetPhysicalSectorInBytes"></a>

```go
func ResetPhysicalSectorInBytes()
```

##### `ResetStoragePathId` <a name="ResetStoragePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetStoragePathId"></a>

```go
func ResetStoragePathId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.StackHciVirtualHardDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.StackHciVirtualHardDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.StackHciVirtualHardDisk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.StackHciVirtualHardDisk_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackHciVirtualHardDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackHciVirtualHardDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackHciVirtualHardDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput">BlockSizeInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput">DiskFileFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput">DiskSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput">DynamicEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput">HypervGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput">LogicalSectorInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput">PhysicalSectorInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput">StoragePathIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes">BlockSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat">DiskFileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled">DynamicEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration">HypervGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes">LogicalSectorInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes">PhysicalSectorInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId">StoragePathId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeouts"></a>

```go
func Timeouts() StackHciVirtualHardDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference">StackHciVirtualHardDiskTimeoutsOutputReference</a>

---

##### `BlockSizeInBytesInput`<sup>Optional</sup> <a name="BlockSizeInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytesInput"></a>

```go
func BlockSizeInBytesInput() *f64
```

- *Type:* *f64

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationIdInput"></a>

```go
func CustomLocationIdInput() *string
```

- *Type:* *string

---

##### `DiskFileFormatInput`<sup>Optional</sup> <a name="DiskFileFormatInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormatInput"></a>

```go
func DiskFileFormatInput() *string
```

- *Type:* *string

---

##### `DiskSizeInGbInput`<sup>Optional</sup> <a name="DiskSizeInGbInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGbInput"></a>

```go
func DiskSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `DynamicEnabledInput`<sup>Optional</sup> <a name="DynamicEnabledInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabledInput"></a>

```go
func DynamicEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HypervGenerationInput`<sup>Optional</sup> <a name="HypervGenerationInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGenerationInput"></a>

```go
func HypervGenerationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogicalSectorInBytesInput`<sup>Optional</sup> <a name="LogicalSectorInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytesInput"></a>

```go
func LogicalSectorInBytesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhysicalSectorInBytesInput`<sup>Optional</sup> <a name="PhysicalSectorInBytesInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytesInput"></a>

```go
func PhysicalSectorInBytesInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StoragePathIdInput`<sup>Optional</sup> <a name="StoragePathIdInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathIdInput"></a>

```go
func StoragePathIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockSizeInBytes`<sup>Required</sup> <a name="BlockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.blockSizeInBytes"></a>

```go
func BlockSizeInBytes() *f64
```

- *Type:* *f64

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.customLocationId"></a>

```go
func CustomLocationId() *string
```

- *Type:* *string

---

##### `DiskFileFormat`<sup>Required</sup> <a name="DiskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskFileFormat"></a>

```go
func DiskFileFormat() *string
```

- *Type:* *string

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.diskSizeInGb"></a>

```go
func DiskSizeInGb() *f64
```

- *Type:* *f64

---

##### `DynamicEnabled`<sup>Required</sup> <a name="DynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.dynamicEnabled"></a>

```go
func DynamicEnabled() interface{}
```

- *Type:* interface{}

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.hypervGeneration"></a>

```go
func HypervGeneration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LogicalSectorInBytes`<sup>Required</sup> <a name="LogicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.logicalSectorInBytes"></a>

```go
func LogicalSectorInBytes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhysicalSectorInBytes`<sup>Required</sup> <a name="PhysicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.physicalSectorInBytes"></a>

```go
func PhysicalSectorInBytes() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StoragePathId`<sup>Required</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.storagePathId"></a>

```go
func StoragePathId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciVirtualHardDiskConfig <a name="StackHciVirtualHardDiskConfig" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

&stackhcivirtualharddisk.StackHciVirtualHardDiskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomLocationId: *string,
	DiskSizeInGb: *f64,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	BlockSizeInBytes: *f64,
	DiskFileFormat: *string,
	DynamicEnabled: interface{},
	HypervGeneration: *string,
	Id: *string,
	LogicalSectorInBytes: *f64,
	PhysicalSectorInBytes: *f64,
	StoragePathId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId">CustomLocationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes">BlockSizeInBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat">DiskFileFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled">DynamicEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration">HypervGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes">LogicalSectorInBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes">PhysicalSectorInBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId">StoragePathId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.customLocationId"></a>

```go
CustomLocationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}.

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskSizeInGb"></a>

```go
DiskSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}.

---

##### `BlockSizeInBytes`<sup>Optional</sup> <a name="BlockSizeInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.blockSizeInBytes"></a>

```go
BlockSizeInBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}.

---

##### `DiskFileFormat`<sup>Optional</sup> <a name="DiskFileFormat" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.diskFileFormat"></a>

```go
DiskFileFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}.

---

##### `DynamicEnabled`<sup>Optional</sup> <a name="DynamicEnabled" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.dynamicEnabled"></a>

```go
DynamicEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}.

---

##### `HypervGeneration`<sup>Optional</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.hypervGeneration"></a>

```go
HypervGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalSectorInBytes`<sup>Optional</sup> <a name="LogicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.logicalSectorInBytes"></a>

```go
LogicalSectorInBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}.

---

##### `PhysicalSectorInBytes`<sup>Optional</sup> <a name="PhysicalSectorInBytes" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.physicalSectorInBytes"></a>

```go
PhysicalSectorInBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}.

---

##### `StoragePathId`<sup>Optional</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.storagePathId"></a>

```go
StoragePathId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskConfig.property.timeouts"></a>

```go
Timeouts StackHciVirtualHardDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts">StackHciVirtualHardDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}

---

### StackHciVirtualHardDiskTimeouts <a name="StackHciVirtualHardDiskTimeouts" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

&stackhcivirtualharddisk.StackHciVirtualHardDiskTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciVirtualHardDiskTimeoutsOutputReference <a name="StackHciVirtualHardDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/stackhcivirtualharddisk"

stackhcivirtualharddisk.NewStackHciVirtualHardDiskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackHciVirtualHardDiskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciVirtualHardDisk.StackHciVirtualHardDiskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



