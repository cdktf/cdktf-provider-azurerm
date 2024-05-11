# `managedLustreFileSystem` Submodule <a name="`managedLustreFileSystem` Submodule" id="@cdktf/provider-azurerm.managedLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedLustreFileSystem <a name="ManagedLustreFileSystem" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystem(scope Construct, id *string, config ManagedLustreFileSystemConfig) ManagedLustreFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig">ManagedLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting">PutHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting">ResetHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey"></a>

```go
func PutEncryptionKey(value ManagedLustreFileSystemEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `PutHsmSetting` <a name="PutHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting"></a>

```go
func PutHsmSetting(value ManagedLustreFileSystemHsmSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity"></a>

```go
func PutIdentity(value ManagedLustreFileSystemIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value ManagedLustreFileSystemMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts"></a>

```go
func PutTimeouts(value ManagedLustreFileSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetHsmSetting` <a name="ResetHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting"></a>

```go
func ResetHsmSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.ManagedLustreFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.ManagedLustreFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.ManagedLustreFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.ManagedLustreFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedLustreFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting">HsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress">MgsAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput">HsmSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput">StorageCapacityInTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb">StorageCapacityInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey"></a>

```go
func EncryptionKey() ManagedLustreFileSystemEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a>

---

##### `HsmSetting`<sup>Required</sup> <a name="HsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting"></a>

```go
func HsmSetting() ManagedLustreFileSystemHsmSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity"></a>

```go
func Identity() ManagedLustreFileSystemIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() ManagedLustreFileSystemMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a>

---

##### `MgsAddress`<sup>Required</sup> <a name="MgsAddress" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress"></a>

```go
func MgsAddress() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts"></a>

```go
func Timeouts() ManagedLustreFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a>

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() ManagedLustreFileSystemEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `HsmSettingInput`<sup>Optional</sup> <a name="HsmSettingInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput"></a>

```go
func HsmSettingInput() ManagedLustreFileSystemHsmSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput"></a>

```go
func IdentityInput() ManagedLustreFileSystemIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() ManagedLustreFileSystemMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `StorageCapacityInTbInput`<sup>Optional</sup> <a name="StorageCapacityInTbInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput"></a>

```go
func StorageCapacityInTbInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `StorageCapacityInTb`<sup>Required</sup> <a name="StorageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb"></a>

```go
func StorageCapacityInTb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedLustreFileSystemConfig <a name="ManagedLustreFileSystemConfig" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	StorageCapacityInTb: *f64,
	SubnetId: *string,
	Zones: *[]*string,
	EncryptionKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey,
	HsmSetting: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb">StorageCapacityInTb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting">HsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | hsm_setting block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}.

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow ManagedLustreFileSystemMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}.

---

##### `StorageCapacityInTb`<sup>Required</sup> <a name="StorageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb"></a>

```go
StorageCapacityInTb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}.

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey"></a>

```go
EncryptionKey ManagedLustreFileSystemEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}

---

##### `HsmSetting`<sup>Optional</sup> <a name="HsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting"></a>

```go
HsmSetting ManagedLustreFileSystemHsmSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

hsm_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity"></a>

```go
Identity ManagedLustreFileSystemIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts"></a>

```go
Timeouts ManagedLustreFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}

---

### ManagedLustreFileSystemEncryptionKey <a name="ManagedLustreFileSystemEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemEncryptionKey {
	KeyUrl: *string,
	SourceVaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl">KeyUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}. |

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl"></a>

```go
KeyUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}.

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId"></a>

```go
SourceVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}.

---

### ManagedLustreFileSystemHsmSetting <a name="ManagedLustreFileSystemHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemHsmSetting {
	ContainerId: *string,
	LoggingContainerId: *string,
	ImportPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId">ContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId">LoggingContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix">ImportPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId"></a>

```go
ContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}.

---

##### `LoggingContainerId`<sup>Required</sup> <a name="LoggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId"></a>

```go
LoggingContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}.

---

##### `ImportPrefix`<sup>Optional</sup> <a name="ImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix"></a>

```go
ImportPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}.

---

### ManagedLustreFileSystemIdentity <a name="ManagedLustreFileSystemIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}.

---

### ManagedLustreFileSystemMaintenanceWindow <a name="ManagedLustreFileSystemMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemMaintenanceWindow {
	DayOfWeek: *string,
	TimeOfDayInUtc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc">TimeOfDayInUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}.

---

##### `TimeOfDayInUtc`<sup>Required</sup> <a name="TimeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc"></a>

```go
TimeOfDayInUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}.

---

### ManagedLustreFileSystemTimeouts <a name="ManagedLustreFileSystemTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

&managedlustrefilesystem.ManagedLustreFileSystemTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedLustreFileSystemEncryptionKeyOutputReference <a name="ManagedLustreFileSystemEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystemEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedLustreFileSystemEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput">KeyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput">SourceVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl">KeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyUrlInput`<sup>Optional</sup> <a name="KeyUrlInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput"></a>

```go
func KeyUrlInput() *string
```

- *Type:* *string

---

##### `SourceVaultIdInput`<sup>Optional</sup> <a name="SourceVaultIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```go
func SourceVaultIdInput() *string
```

- *Type:* *string

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl"></a>

```go
func KeyUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedLustreFileSystemEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---


### ManagedLustreFileSystemHsmSettingOutputReference <a name="ManagedLustreFileSystemHsmSettingOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystemHsmSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedLustreFileSystemHsmSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix">ResetImportPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImportPrefix` <a name="ResetImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix"></a>

```go
func ResetImportPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput">ImportPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput">LoggingContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix">ImportPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId">LoggingContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput"></a>

```go
func ContainerIdInput() *string
```

- *Type:* *string

---

##### `ImportPrefixInput`<sup>Optional</sup> <a name="ImportPrefixInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput"></a>

```go
func ImportPrefixInput() *string
```

- *Type:* *string

---

##### `LoggingContainerIdInput`<sup>Optional</sup> <a name="LoggingContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput"></a>

```go
func LoggingContainerIdInput() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `ImportPrefix`<sup>Required</sup> <a name="ImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix"></a>

```go
func ImportPrefix() *string
```

- *Type:* *string

---

##### `LoggingContainerId`<sup>Required</sup> <a name="LoggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId"></a>

```go
func LoggingContainerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedLustreFileSystemHsmSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---


### ManagedLustreFileSystemIdentityOutputReference <a name="ManagedLustreFileSystemIdentityOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystemIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedLustreFileSystemIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedLustreFileSystemIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---


### ManagedLustreFileSystemMaintenanceWindowOutputReference <a name="ManagedLustreFileSystemMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystemMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedLustreFileSystemMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput">TimeOfDayInUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc">TimeOfDayInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `TimeOfDayInUtcInput`<sup>Optional</sup> <a name="TimeOfDayInUtcInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput"></a>

```go
func TimeOfDayInUtcInput() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `TimeOfDayInUtc`<sup>Required</sup> <a name="TimeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc"></a>

```go
func TimeOfDayInUtc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedLustreFileSystemMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---


### ManagedLustreFileSystemTimeoutsOutputReference <a name="ManagedLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/managedlustrefilesystem"

managedlustrefilesystem.NewManagedLustreFileSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedLustreFileSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



