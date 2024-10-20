# `dataProtectionBackupPolicyBlobStorage` Submodule <a name="`dataProtectionBackupPolicyBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyBlobStorage <a name="DataProtectionBackupPolicyBlobStorage" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage azurerm_data_protection_backup_policy_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorage(scope Construct, id *string, config DataProtectionBackupPolicyBlobStorageConfig) DataProtectionBackupPolicyBlobStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig">DataProtectionBackupPolicyBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig">DataProtectionBackupPolicyBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetBackupRepeatingTimeIntervals">ResetBackupRepeatingTimeIntervals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOperationalDefaultRetentionDuration">ResetOperationalDefaultRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetVaultDefaultRetentionDuration">ResetVaultDefaultRetentionDuration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule"></a>

```go
func PutRetentionRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putRetentionRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupPolicyBlobStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

---

##### `ResetBackupRepeatingTimeIntervals` <a name="ResetBackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetBackupRepeatingTimeIntervals"></a>

```go
func ResetBackupRepeatingTimeIntervals()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetOperationalDefaultRetentionDuration` <a name="ResetOperationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetOperationalDefaultRetentionDuration"></a>

```go
func ResetOperationalDefaultRetentionDuration()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetRetentionRule"></a>

```go
func ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetVaultDefaultRetentionDuration` <a name="ResetVaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.resetVaultDefaultRetentionDuration"></a>

```go
func ResetVaultDefaultRetentionDuration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyBlobStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataProtectionBackupPolicyBlobStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupPolicyBlobStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupPolicyBlobStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyBlobStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList">DataProtectionBackupPolicyBlobStorageRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference">DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDurationInput">OperationalDefaultRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDurationInput">VaultDefaultRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDuration">OperationalDefaultRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDuration">VaultDefaultRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRule"></a>

```go
func RetentionRule() DataProtectionBackupPolicyBlobStorageRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList">DataProtectionBackupPolicyBlobStorageRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference">DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervalsInput"></a>

```go
func BackupRepeatingTimeIntervalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationalDefaultRetentionDurationInput`<sup>Optional</sup> <a name="OperationalDefaultRetentionDurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDurationInput"></a>

```go
func OperationalDefaultRetentionDurationInput() *string
```

- *Type:* *string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.retentionRuleInput"></a>

```go
func RetentionRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `VaultDefaultRetentionDurationInput`<sup>Optional</sup> <a name="VaultDefaultRetentionDurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDurationInput"></a>

```go
func VaultDefaultRetentionDurationInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.backupRepeatingTimeIntervals"></a>

```go
func BackupRepeatingTimeIntervals() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperationalDefaultRetentionDuration`<sup>Required</sup> <a name="OperationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.operationalDefaultRetentionDuration"></a>

```go
func OperationalDefaultRetentionDuration() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VaultDefaultRetentionDuration`<sup>Required</sup> <a name="VaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultDefaultRetentionDuration"></a>

```go
func VaultDefaultRetentionDuration() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyBlobStorageConfig <a name="DataProtectionBackupPolicyBlobStorageConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

&dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	VaultId: *string,
	BackupRepeatingTimeIntervals: *[]*string,
	Id: *string,
	OperationalDefaultRetentionDuration: *string,
	RetentionRule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts,
	TimeZone: *string,
	VaultDefaultRetentionDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.operationalDefaultRetentionDuration">OperationalDefaultRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.retentionRule">RetentionRule</a></code> | <code>interface{}</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultDefaultRetentionDuration">VaultDefaultRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#vault_id DataProtectionBackupPolicyBlobStorage#vault_id}.

---

##### `BackupRepeatingTimeIntervals`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.backupRepeatingTimeIntervals"></a>

```go
BackupRepeatingTimeIntervals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#backup_repeating_time_intervals DataProtectionBackupPolicyBlobStorage#backup_repeating_time_intervals}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#id DataProtectionBackupPolicyBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationalDefaultRetentionDuration`<sup>Optional</sup> <a name="OperationalDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.operationalDefaultRetentionDuration"></a>

```go
OperationalDefaultRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#operational_default_retention_duration DataProtectionBackupPolicyBlobStorage#operational_default_retention_duration}.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.retentionRule"></a>

```go
RetentionRule interface{}
```

- *Type:* interface{}

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#retention_rule DataProtectionBackupPolicyBlobStorage#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupPolicyBlobStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts">DataProtectionBackupPolicyBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#timeouts DataProtectionBackupPolicyBlobStorage#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#time_zone DataProtectionBackupPolicyBlobStorage#time_zone}.

---

##### `VaultDefaultRetentionDuration`<sup>Optional</sup> <a name="VaultDefaultRetentionDuration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageConfig.property.vaultDefaultRetentionDuration"></a>

```go
VaultDefaultRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#vault_default_retention_duration DataProtectionBackupPolicyBlobStorage#vault_default_retention_duration}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRule <a name="DataProtectionBackupPolicyBlobStorageRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

&dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorageRetentionRule {
	Criteria: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria,
	LifeCycle: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle,
	Name: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#priority DataProtectionBackupPolicyBlobStorage#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.criteria"></a>

```go
Criteria DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#criteria DataProtectionBackupPolicyBlobStorage#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.lifeCycle"></a>

```go
LifeCycle DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#life_cycle DataProtectionBackupPolicyBlobStorage#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#name DataProtectionBackupPolicyBlobStorage#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#priority DataProtectionBackupPolicyBlobStorage#priority}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

&dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria {
	AbsoluteCriteria: *string,
	DaysOfMonth: *[]*f64,
	DaysOfWeek: *[]*string,
	MonthsOfYear: *[]*string,
	ScheduledBackupTimes: *[]*string,
	WeeksOfMonth: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#absolute_criteria DataProtectionBackupPolicyBlobStorage#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_month DataProtectionBackupPolicyBlobStorage#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_week DataProtectionBackupPolicyBlobStorage#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#months_of_year DataProtectionBackupPolicyBlobStorage#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#scheduled_backup_times DataProtectionBackupPolicyBlobStorage#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#weeks_of_month DataProtectionBackupPolicyBlobStorage#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.absoluteCriteria"></a>

```go
AbsoluteCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#absolute_criteria DataProtectionBackupPolicyBlobStorage#absolute_criteria}.

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfMonth"></a>

```go
DaysOfMonth *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_month DataProtectionBackupPolicyBlobStorage#days_of_month}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#days_of_week DataProtectionBackupPolicyBlobStorage#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.monthsOfYear"></a>

```go
MonthsOfYear *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#months_of_year DataProtectionBackupPolicyBlobStorage#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```go
ScheduledBackupTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#scheduled_backup_times DataProtectionBackupPolicyBlobStorage#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#weeks_of_month DataProtectionBackupPolicyBlobStorage#weeks_of_month}.

---

### DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

&dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle {
	DataStoreType: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#data_store_type DataProtectionBackupPolicyBlobStorage#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#duration DataProtectionBackupPolicyBlobStorage#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#data_store_type DataProtectionBackupPolicyBlobStorage#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#duration DataProtectionBackupPolicyBlobStorage#duration}.

---

### DataProtectionBackupPolicyBlobStorageTimeouts <a name="DataProtectionBackupPolicyBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

&dataprotectionbackuppolicyblobstorage.DataProtectionBackupPolicyBlobStorageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#create DataProtectionBackupPolicyBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#delete DataProtectionBackupPolicyBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#read DataProtectionBackupPolicyBlobStorage#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#create DataProtectionBackupPolicyBlobStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#delete DataProtectionBackupPolicyBlobStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/data_protection_backup_policy_blob_storage#read DataProtectionBackupPolicyBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```go
func ResetAbsoluteCriteria()
```

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfMonth"></a>

```go
func ResetDaysOfMonth()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```go
func ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```go
func ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```go
func AbsoluteCriteriaInput() *string
```

- *Type:* *string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonthInput"></a>

```go
func DaysOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```go
func MonthsOfYearInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```go
func ScheduledBackupTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```go
func AbsoluteCriteria() *string
```

- *Type:* *string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```go
func MonthsOfYear() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```go
func ScheduledBackupTimes() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleList <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorageRetentionRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyBlobStorageRetentionRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference <a name="DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria"></a>

```go
func PutCriteria(value DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle"></a>

```go
func PutLifeCycle(value DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteria"></a>

```go
func Criteria() DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycle"></a>

```go
func LifeCycle() DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycleOutputReference</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria">DataProtectionBackupPolicyBlobStorageRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.lifeCycleInput"></a>

```go
func LifeCycleInput() DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle">DataProtectionBackupPolicyBlobStorageRetentionRuleLifeCycle</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference <a name="DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataprotectionbackuppolicyblobstorage"

dataprotectionbackuppolicyblobstorage.NewDataProtectionBackupPolicyBlobStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyBlobStorage.DataProtectionBackupPolicyBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



