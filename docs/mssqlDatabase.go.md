# `mssqlDatabase` Submodule <a name="`mssqlDatabase` Submodule" id="@cdktf/provider-azurerm.mssqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabase <a name="MssqlDatabase" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database azurerm_mssql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabase(scope Construct, id *string, config MssqlDatabaseConfig) MssqlDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport">PutImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy">PutLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy">PutShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy">PutThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes">ResetAutoPauseDelayInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId">ResetCreationSourceDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId">ResetElasticPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType">ResetEnclaveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled">ResetGeoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport">ResetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled">ResetLedgerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy">ResetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName">ResetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb">ResetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount">ResetReadReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale">ResetReadScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId">ResetRecoverDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId">ResetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId">ResetRestoreDroppedDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId">ResetRestoreLongTermRetentionBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime">ResetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName">ResetSampleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType">ResetSecondaryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy">ResetShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy">ResetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled">ResetTransparentDataEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled">ResetTransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId">ResetTransparentDataEncryptionKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity"></a>

```go
func PutIdentity(value MssqlDatabaseIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `PutImport` <a name="PutImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport"></a>

```go
func PutImport(value MssqlDatabaseImport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `PutLongTermRetentionPolicy` <a name="PutLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy"></a>

```go
func PutLongTermRetentionPolicy(value MssqlDatabaseLongTermRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `PutShortTermRetentionPolicy` <a name="PutShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy"></a>

```go
func PutShortTermRetentionPolicy(value MssqlDatabaseShortTermRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `PutThreatDetectionPolicy` <a name="PutThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy"></a>

```go
func PutThreatDetectionPolicy(value MssqlDatabaseThreatDetectionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts"></a>

```go
func PutTimeouts(value MssqlDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---

##### `ResetAutoPauseDelayInMinutes` <a name="ResetAutoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes"></a>

```go
func ResetAutoPauseDelayInMinutes()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode"></a>

```go
func ResetCreateMode()
```

##### `ResetCreationSourceDatabaseId` <a name="ResetCreationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId"></a>

```go
func ResetCreationSourceDatabaseId()
```

##### `ResetElasticPoolId` <a name="ResetElasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId"></a>

```go
func ResetElasticPoolId()
```

##### `ResetEnclaveType` <a name="ResetEnclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType"></a>

```go
func ResetEnclaveType()
```

##### `ResetGeoBackupEnabled` <a name="ResetGeoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled"></a>

```go
func ResetGeoBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetImport` <a name="ResetImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport"></a>

```go
func ResetImport()
```

##### `ResetLedgerEnabled` <a name="ResetLedgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled"></a>

```go
func ResetLedgerEnabled()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetLongTermRetentionPolicy` <a name="ResetLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy"></a>

```go
func ResetLongTermRetentionPolicy()
```

##### `ResetMaintenanceConfigurationName` <a name="ResetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName"></a>

```go
func ResetMaintenanceConfigurationName()
```

##### `ResetMaxSizeGb` <a name="ResetMaxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb"></a>

```go
func ResetMaxSizeGb()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```

##### `ResetReadReplicaCount` <a name="ResetReadReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount"></a>

```go
func ResetReadReplicaCount()
```

##### `ResetReadScale` <a name="ResetReadScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale"></a>

```go
func ResetReadScale()
```

##### `ResetRecoverDatabaseId` <a name="ResetRecoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId"></a>

```go
func ResetRecoverDatabaseId()
```

##### `ResetRecoveryPointId` <a name="ResetRecoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId"></a>

```go
func ResetRecoveryPointId()
```

##### `ResetRestoreDroppedDatabaseId` <a name="ResetRestoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId"></a>

```go
func ResetRestoreDroppedDatabaseId()
```

##### `ResetRestoreLongTermRetentionBackupId` <a name="ResetRestoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId"></a>

```go
func ResetRestoreLongTermRetentionBackupId()
```

##### `ResetRestorePointInTime` <a name="ResetRestorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime"></a>

```go
func ResetRestorePointInTime()
```

##### `ResetSampleName` <a name="ResetSampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName"></a>

```go
func ResetSampleName()
```

##### `ResetSecondaryType` <a name="ResetSecondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType"></a>

```go
func ResetSecondaryType()
```

##### `ResetShortTermRetentionPolicy` <a name="ResetShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy"></a>

```go
func ResetShortTermRetentionPolicy()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName"></a>

```go
func ResetSkuName()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType"></a>

```go
func ResetStorageAccountType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThreatDetectionPolicy` <a name="ResetThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy"></a>

```go
func ResetThreatDetectionPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransparentDataEncryptionEnabled` <a name="ResetTransparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled"></a>

```go
func ResetTransparentDataEncryptionEnabled()
```

##### `ResetTransparentDataEncryptionKeyAutomaticRotationEnabled` <a name="ResetTransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```go
func ResetTransparentDataEncryptionKeyAutomaticRotationEnabled()
```

##### `ResetTransparentDataEncryptionKeyVaultKeyId` <a name="ResetTransparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId"></a>

```go
func ResetTransparentDataEncryptionKeyVaultKeyId()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant"></a>

```go
func ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.MssqlDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.MssqlDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.MssqlDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.MssqlDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import">Import</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy">ShortTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput">AutoPauseDelayInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput">CreateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput">CreationSourceDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput">ElasticPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput">EnclaveTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput">GeoBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput">ImportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput">LedgerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput">LongTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput">MaintenanceConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput">MaxSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput">ReadReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput">ReadScaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput">RecoverDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput">RecoveryPointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput">RestoreDroppedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput">RestoreLongTermRetentionBackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput">RestorePointInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput">SampleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput">SecondaryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput">ShortTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput">ThreatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput">TransparentDataEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput">TransparentDataEncryptionKeyAutomaticRotationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput">TransparentDataEncryptionKeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes">AutoPauseDelayInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode">CreateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId">CreationSourceDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId">ElasticPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType">EnclaveType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled">GeoBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled">LedgerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb">MaxSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount">ReadReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale">ReadScale</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId">RecoverDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId">RecoveryPointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId">RestoreDroppedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId">RestoreLongTermRetentionBackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime">RestorePointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName">SampleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType">SecondaryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled">TransparentDataEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled">TransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity"></a>

```go
func Identity() MssqlDatabaseIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a>

---

##### `Import`<sup>Required</sup> <a name="Import" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import"></a>

```go
func Import() MssqlDatabaseImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a>

---

##### `LongTermRetentionPolicy`<sup>Required</sup> <a name="LongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy"></a>

```go
func LongTermRetentionPolicy() MssqlDatabaseLongTermRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `ShortTermRetentionPolicy`<sup>Required</sup> <a name="ShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy"></a>

```go
func ShortTermRetentionPolicy() MssqlDatabaseShortTermRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a>

---

##### `ThreatDetectionPolicy`<sup>Required</sup> <a name="ThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy"></a>

```go
func ThreatDetectionPolicy() MssqlDatabaseThreatDetectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts"></a>

```go
func Timeouts() MssqlDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a>

---

##### `AutoPauseDelayInMinutesInput`<sup>Optional</sup> <a name="AutoPauseDelayInMinutesInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput"></a>

```go
func AutoPauseDelayInMinutesInput() *f64
```

- *Type:* *f64

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput"></a>

```go
func CreateModeInput() *string
```

- *Type:* *string

---

##### `CreationSourceDatabaseIdInput`<sup>Optional</sup> <a name="CreationSourceDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput"></a>

```go
func CreationSourceDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ElasticPoolIdInput`<sup>Optional</sup> <a name="ElasticPoolIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput"></a>

```go
func ElasticPoolIdInput() *string
```

- *Type:* *string

---

##### `EnclaveTypeInput`<sup>Optional</sup> <a name="EnclaveTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput"></a>

```go
func EnclaveTypeInput() *string
```

- *Type:* *string

---

##### `GeoBackupEnabledInput`<sup>Optional</sup> <a name="GeoBackupEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput"></a>

```go
func GeoBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput"></a>

```go
func IdentityInput() MssqlDatabaseIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportInput`<sup>Optional</sup> <a name="ImportInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput"></a>

```go
func ImportInput() MssqlDatabaseImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `LedgerEnabledInput`<sup>Optional</sup> <a name="LedgerEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput"></a>

```go
func LedgerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LongTermRetentionPolicyInput`<sup>Optional</sup> <a name="LongTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput"></a>

```go
func LongTermRetentionPolicyInput() MssqlDatabaseLongTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `MaintenanceConfigurationNameInput`<sup>Optional</sup> <a name="MaintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput"></a>

```go
func MaintenanceConfigurationNameInput() *string
```

- *Type:* *string

---

##### `MaxSizeGbInput`<sup>Optional</sup> <a name="MaxSizeGbInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput"></a>

```go
func MaxSizeGbInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReadReplicaCountInput`<sup>Optional</sup> <a name="ReadReplicaCountInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput"></a>

```go
func ReadReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `ReadScaleInput`<sup>Optional</sup> <a name="ReadScaleInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput"></a>

```go
func ReadScaleInput() interface{}
```

- *Type:* interface{}

---

##### `RecoverDatabaseIdInput`<sup>Optional</sup> <a name="RecoverDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput"></a>

```go
func RecoverDatabaseIdInput() *string
```

- *Type:* *string

---

##### `RecoveryPointIdInput`<sup>Optional</sup> <a name="RecoveryPointIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput"></a>

```go
func RecoveryPointIdInput() *string
```

- *Type:* *string

---

##### `RestoreDroppedDatabaseIdInput`<sup>Optional</sup> <a name="RestoreDroppedDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput"></a>

```go
func RestoreDroppedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `RestoreLongTermRetentionBackupIdInput`<sup>Optional</sup> <a name="RestoreLongTermRetentionBackupIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput"></a>

```go
func RestoreLongTermRetentionBackupIdInput() *string
```

- *Type:* *string

---

##### `RestorePointInTimeInput`<sup>Optional</sup> <a name="RestorePointInTimeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput"></a>

```go
func RestorePointInTimeInput() *string
```

- *Type:* *string

---

##### `SampleNameInput`<sup>Optional</sup> <a name="SampleNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput"></a>

```go
func SampleNameInput() *string
```

- *Type:* *string

---

##### `SecondaryTypeInput`<sup>Optional</sup> <a name="SecondaryTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput"></a>

```go
func SecondaryTypeInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `ShortTermRetentionPolicyInput`<sup>Optional</sup> <a name="ShortTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput"></a>

```go
func ShortTermRetentionPolicyInput() MssqlDatabaseShortTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThreatDetectionPolicyInput`<sup>Optional</sup> <a name="ThreatDetectionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput"></a>

```go
func ThreatDetectionPolicyInput() MssqlDatabaseThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionEnabledInput`<sup>Optional</sup> <a name="TransparentDataEncryptionEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput"></a>

```go
func TransparentDataEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabledInput`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput"></a>

```go
func TransparentDataEncryptionKeyAutomaticRotationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionKeyVaultKeyIdInput`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput"></a>

```go
func TransparentDataEncryptionKeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput"></a>

```go
func ZoneRedundantInput() interface{}
```

- *Type:* interface{}

---

##### `AutoPauseDelayInMinutes`<sup>Required</sup> <a name="AutoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes"></a>

```go
func AutoPauseDelayInMinutes() *f64
```

- *Type:* *f64

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode"></a>

```go
func CreateMode() *string
```

- *Type:* *string

---

##### `CreationSourceDatabaseId`<sup>Required</sup> <a name="CreationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId"></a>

```go
func CreationSourceDatabaseId() *string
```

- *Type:* *string

---

##### `ElasticPoolId`<sup>Required</sup> <a name="ElasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId"></a>

```go
func ElasticPoolId() *string
```

- *Type:* *string

---

##### `EnclaveType`<sup>Required</sup> <a name="EnclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType"></a>

```go
func EnclaveType() *string
```

- *Type:* *string

---

##### `GeoBackupEnabled`<sup>Required</sup> <a name="GeoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled"></a>

```go
func GeoBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LedgerEnabled`<sup>Required</sup> <a name="LedgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled"></a>

```go
func LedgerEnabled() interface{}
```

- *Type:* interface{}

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationName`<sup>Required</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName"></a>

```go
func MaintenanceConfigurationName() *string
```

- *Type:* *string

---

##### `MaxSizeGb`<sup>Required</sup> <a name="MaxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb"></a>

```go
func MaxSizeGb() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReadReplicaCount`<sup>Required</sup> <a name="ReadReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount"></a>

```go
func ReadReplicaCount() *f64
```

- *Type:* *f64

---

##### `ReadScale`<sup>Required</sup> <a name="ReadScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale"></a>

```go
func ReadScale() interface{}
```

- *Type:* interface{}

---

##### `RecoverDatabaseId`<sup>Required</sup> <a name="RecoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId"></a>

```go
func RecoverDatabaseId() *string
```

- *Type:* *string

---

##### `RecoveryPointId`<sup>Required</sup> <a name="RecoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId"></a>

```go
func RecoveryPointId() *string
```

- *Type:* *string

---

##### `RestoreDroppedDatabaseId`<sup>Required</sup> <a name="RestoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId"></a>

```go
func RestoreDroppedDatabaseId() *string
```

- *Type:* *string

---

##### `RestoreLongTermRetentionBackupId`<sup>Required</sup> <a name="RestoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId"></a>

```go
func RestoreLongTermRetentionBackupId() *string
```

- *Type:* *string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime"></a>

```go
func RestorePointInTime() *string
```

- *Type:* *string

---

##### `SampleName`<sup>Required</sup> <a name="SampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName"></a>

```go
func SampleName() *string
```

- *Type:* *string

---

##### `SecondaryType`<sup>Required</sup> <a name="SecondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType"></a>

```go
func SecondaryType() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransparentDataEncryptionEnabled`<sup>Required</sup> <a name="TransparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled"></a>

```go
func TransparentDataEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Required</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```go
func TransparentDataEncryptionKeyAutomaticRotationEnabled() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Required</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId"></a>

```go
func TransparentDataEncryptionKeyVaultKeyId() *string
```

- *Type:* *string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant"></a>

```go
func ZoneRedundant() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseConfig <a name="MssqlDatabaseConfig" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ServerId: *string,
	AutoPauseDelayInMinutes: *f64,
	Collation: *string,
	CreateMode: *string,
	CreationSourceDatabaseId: *string,
	ElasticPoolId: *string,
	EnclaveType: *string,
	GeoBackupEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseIdentity,
	Import: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseImport,
	LedgerEnabled: interface{},
	LicenseType: *string,
	LongTermRetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy,
	MaintenanceConfigurationName: *string,
	MaxSizeGb: *f64,
	MinCapacity: *f64,
	ReadReplicaCount: *f64,
	ReadScale: interface{},
	RecoverDatabaseId: *string,
	RecoveryPointId: *string,
	RestoreDroppedDatabaseId: *string,
	RestoreLongTermRetentionBackupId: *string,
	RestorePointInTime: *string,
	SampleName: *string,
	SecondaryType: *string,
	ShortTermRetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy,
	SkuName: *string,
	StorageAccountType: *string,
	Tags: *map[string]*string,
	ThreatDetectionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlDatabase.MssqlDatabaseTimeouts,
	TransparentDataEncryptionEnabled: interface{},
	TransparentDataEncryptionKeyAutomaticRotationEnabled: interface{},
	TransparentDataEncryptionKeyVaultKeyId: *string,
	ZoneRedundant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#name MssqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes">AutoPauseDelayInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation">Collation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#collation MssqlDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode">CreateMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId">CreationSourceDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId">ElasticPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType">EnclaveType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled">GeoBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#id MssqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import">Import</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled">LedgerEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb">MaxSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount">ReadReplicaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale">ReadScale</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId">RecoverDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId">RecoveryPointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId">RestoreDroppedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId">RestoreLongTermRetentionBackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime">RestorePointInTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName">SampleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType">SecondaryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy">ShortTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | short_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#tags MssqlDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled">TransparentDataEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled">TransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#name MssqlDatabase#name}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}.

---

##### `AutoPauseDelayInMinutes`<sup>Optional</sup> <a name="AutoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes"></a>

```go
AutoPauseDelayInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}.

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#collation MssqlDatabase#collation}.

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode"></a>

```go
CreateMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}.

---

##### `CreationSourceDatabaseId`<sup>Optional</sup> <a name="CreationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId"></a>

```go
CreationSourceDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}.

---

##### `ElasticPoolId`<sup>Optional</sup> <a name="ElasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId"></a>

```go
ElasticPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}.

---

##### `EnclaveType`<sup>Optional</sup> <a name="EnclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType"></a>

```go
EnclaveType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}.

---

##### `GeoBackupEnabled`<sup>Optional</sup> <a name="GeoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled"></a>

```go
GeoBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#id MssqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity"></a>

```go
Identity MssqlDatabaseIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#identity MssqlDatabase#identity}

---

##### `Import`<sup>Optional</sup> <a name="Import" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import"></a>

```go
Import MssqlDatabaseImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#import MssqlDatabase#import}

---

##### `LedgerEnabled`<sup>Optional</sup> <a name="LedgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled"></a>

```go
LedgerEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}.

---

##### `LongTermRetentionPolicy`<sup>Optional</sup> <a name="LongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy"></a>

```go
LongTermRetentionPolicy MssqlDatabaseLongTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#long_term_retention_policy MssqlDatabase#long_term_retention_policy}

---

##### `MaintenanceConfigurationName`<sup>Optional</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName"></a>

```go
MaintenanceConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}.

---

##### `MaxSizeGb`<sup>Optional</sup> <a name="MaxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb"></a>

```go
MaxSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}.

---

##### `ReadReplicaCount`<sup>Optional</sup> <a name="ReadReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount"></a>

```go
ReadReplicaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}.

---

##### `ReadScale`<sup>Optional</sup> <a name="ReadScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale"></a>

```go
ReadScale interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}.

---

##### `RecoverDatabaseId`<sup>Optional</sup> <a name="RecoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId"></a>

```go
RecoverDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}.

---

##### `RecoveryPointId`<sup>Optional</sup> <a name="RecoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId"></a>

```go
RecoveryPointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}.

---

##### `RestoreDroppedDatabaseId`<sup>Optional</sup> <a name="RestoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId"></a>

```go
RestoreDroppedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}.

---

##### `RestoreLongTermRetentionBackupId`<sup>Optional</sup> <a name="RestoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId"></a>

```go
RestoreLongTermRetentionBackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}.

---

##### `RestorePointInTime`<sup>Optional</sup> <a name="RestorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime"></a>

```go
RestorePointInTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}.

---

##### `SampleName`<sup>Optional</sup> <a name="SampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName"></a>

```go
SampleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}.

---

##### `SecondaryType`<sup>Optional</sup> <a name="SecondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType"></a>

```go
SecondaryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}.

---

##### `ShortTermRetentionPolicy`<sup>Optional</sup> <a name="ShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy"></a>

```go
ShortTermRetentionPolicy MssqlDatabaseShortTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

short_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#short_term_retention_policy MssqlDatabase#short_term_retention_policy}

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#tags MssqlDatabase#tags}.

---

##### `ThreatDetectionPolicy`<sup>Optional</sup> <a name="ThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy"></a>

```go
ThreatDetectionPolicy MssqlDatabaseThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#threat_detection_policy MssqlDatabase#threat_detection_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts"></a>

```go
Timeouts MssqlDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#timeouts MssqlDatabase#timeouts}

---

##### `TransparentDataEncryptionEnabled`<sup>Optional</sup> <a name="TransparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled"></a>

```go
TransparentDataEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}.

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```go
TransparentDataEncryptionKeyAutomaticRotationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}.

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId"></a>

```go
TransparentDataEncryptionKeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}.

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant"></a>

```go
ZoneRedundant interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}.

---

### MssqlDatabaseIdentity <a name="MssqlDatabaseIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#type MssqlDatabase#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#type MssqlDatabase#type}.

---

### MssqlDatabaseImport <a name="MssqlDatabaseImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseImport {
	AdministratorLogin: *string,
	AdministratorLoginPassword: *string,
	AuthenticationType: *string,
	StorageKey: *string,
	StorageKeyType: *string,
	StorageUri: *string,
	StorageAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey">StorageKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType">StorageKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri">StorageUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}. |

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword"></a>

```go
AdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}.

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}.

---

##### `StorageKey`<sup>Required</sup> <a name="StorageKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey"></a>

```go
StorageKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}.

---

##### `StorageKeyType`<sup>Required</sup> <a name="StorageKeyType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType"></a>

```go
StorageKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}.

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri"></a>

```go
StorageUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}.

---

### MssqlDatabaseLongTermRetentionPolicy <a name="MssqlDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseLongTermRetentionPolicy {
	ImmutableBackupsEnabled: interface{},
	MonthlyRetention: *string,
	WeeklyRetention: *string,
	WeekOfYear: *f64,
	YearlyRetention: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled">ImmutableBackupsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#immutable_backups_enabled MssqlDatabase#immutable_backups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention">MonthlyRetention</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention">WeeklyRetention</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear">WeekOfYear</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention">YearlyRetention</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}. |

---

##### `ImmutableBackupsEnabled`<sup>Optional</sup> <a name="ImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled"></a>

```go
ImmutableBackupsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#immutable_backups_enabled MssqlDatabase#immutable_backups_enabled}.

---

##### `MonthlyRetention`<sup>Optional</sup> <a name="MonthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```go
MonthlyRetention *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}.

---

##### `WeeklyRetention`<sup>Optional</sup> <a name="WeeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```go
WeeklyRetention *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}.

---

##### `WeekOfYear`<sup>Optional</sup> <a name="WeekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```go
WeekOfYear *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}.

---

##### `YearlyRetention`<sup>Optional</sup> <a name="YearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```go
YearlyRetention *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}.

---

### MssqlDatabaseShortTermRetentionPolicy <a name="MssqlDatabaseShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseShortTermRetentionPolicy {
	RetentionDays: *f64,
	BackupIntervalInHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours">BackupIntervalInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}. |

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `BackupIntervalInHours`<sup>Optional</sup> <a name="BackupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours"></a>

```go
BackupIntervalInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}.

---

### MssqlDatabaseThreatDetectionPolicy <a name="MssqlDatabaseThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseThreatDetectionPolicy {
	DisabledAlerts: *[]*string,
	EmailAccountAdmins: *string,
	EmailAddresses: *[]*string,
	RetentionDays: *f64,
	State: *string,
	StorageAccountAccessKey: *string,
	StorageEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#email_account_admins MssqlDatabase#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#state MssqlDatabase#state}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}. |

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts"></a>

```go
DisabledAlerts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}.

---

##### `EmailAccountAdmins`<sup>Optional</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins"></a>

```go
EmailAccountAdmins *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#email_account_admins MssqlDatabase#email_account_admins}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#state MssqlDatabase#state}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}.

---

### MssqlDatabaseTimeouts <a name="MssqlDatabaseTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

&mssqldatabase.MssqlDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#create MssqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#delete MssqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read MssqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#update MssqlDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#create MssqlDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#delete MssqlDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#read MssqlDatabase#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_database#update MssqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseIdentityOutputReference <a name="MssqlDatabaseIdentityOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlDatabaseIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---


### MssqlDatabaseImportOutputReference <a name="MssqlDatabaseImportOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseImportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseImportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput">StorageKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput">StorageKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey">StorageKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType">StorageKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri">StorageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput"></a>

```go
func AdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `StorageKeyInput`<sup>Optional</sup> <a name="StorageKeyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput"></a>

```go
func StorageKeyInput() *string
```

- *Type:* *string

---

##### `StorageKeyTypeInput`<sup>Optional</sup> <a name="StorageKeyTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput"></a>

```go
func StorageKeyTypeInput() *string
```

- *Type:* *string

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput"></a>

```go
func StorageUriInput() *string
```

- *Type:* *string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword"></a>

```go
func AdministratorLoginPassword() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageKey`<sup>Required</sup> <a name="StorageKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey"></a>

```go
func StorageKey() *string
```

- *Type:* *string

---

##### `StorageKeyType`<sup>Required</sup> <a name="StorageKeyType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType"></a>

```go
func StorageKeyType() *string
```

- *Type:* *string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri"></a>

```go
func StorageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlDatabaseImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---


### MssqlDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseLongTermRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseLongTermRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled">ResetImmutableBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">ResetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">ResetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">ResetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">ResetYearlyRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmutableBackupsEnabled` <a name="ResetImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled"></a>

```go
func ResetImmutableBackupsEnabled()
```

##### `ResetMonthlyRetention` <a name="ResetMonthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```go
func ResetMonthlyRetention()
```

##### `ResetWeeklyRetention` <a name="ResetWeeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```go
func ResetWeeklyRetention()
```

##### `ResetWeekOfYear` <a name="ResetWeekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```go
func ResetWeekOfYear()
```

##### `ResetYearlyRetention` <a name="ResetYearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```go
func ResetYearlyRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput">ImmutableBackupsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">MonthlyRetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">WeeklyRetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">WeekOfYearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">YearlyRetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">ImmutableBackupsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">MonthlyRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">WeeklyRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">WeekOfYear</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">YearlyRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImmutableBackupsEnabledInput`<sup>Optional</sup> <a name="ImmutableBackupsEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput"></a>

```go
func ImmutableBackupsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyRetentionInput`<sup>Optional</sup> <a name="MonthlyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```go
func MonthlyRetentionInput() *string
```

- *Type:* *string

---

##### `WeeklyRetentionInput`<sup>Optional</sup> <a name="WeeklyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```go
func WeeklyRetentionInput() *string
```

- *Type:* *string

---

##### `WeekOfYearInput`<sup>Optional</sup> <a name="WeekOfYearInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```go
func WeekOfYearInput() *f64
```

- *Type:* *f64

---

##### `YearlyRetentionInput`<sup>Optional</sup> <a name="YearlyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```go
func YearlyRetentionInput() *string
```

- *Type:* *string

---

##### `ImmutableBackupsEnabled`<sup>Required</sup> <a name="ImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```go
func ImmutableBackupsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MonthlyRetention`<sup>Required</sup> <a name="MonthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```go
func MonthlyRetention() *string
```

- *Type:* *string

---

##### `WeeklyRetention`<sup>Required</sup> <a name="WeeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```go
func WeeklyRetention() *string
```

- *Type:* *string

---

##### `WeekOfYear`<sup>Required</sup> <a name="WeekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```go
func WeekOfYear() *f64
```

- *Type:* *f64

---

##### `YearlyRetention`<sup>Required</sup> <a name="YearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```go
func YearlyRetention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlDatabaseLongTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---


### MssqlDatabaseShortTermRetentionPolicyOutputReference <a name="MssqlDatabaseShortTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseShortTermRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseShortTermRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours">ResetBackupIntervalInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupIntervalInHours` <a name="ResetBackupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours"></a>

```go
func ResetBackupIntervalInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput">BackupIntervalInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours">BackupIntervalInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupIntervalInHoursInput`<sup>Optional</sup> <a name="BackupIntervalInHoursInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput"></a>

```go
func BackupIntervalInHoursInput() *f64
```

- *Type:* *f64

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupIntervalInHours`<sup>Required</sup> <a name="BackupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours"></a>

```go
func BackupIntervalInHours() *f64
```

- *Type:* *f64

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlDatabaseShortTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---


### MssqlDatabaseThreatDetectionPolicyOutputReference <a name="MssqlDatabaseThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseThreatDetectionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseThreatDetectionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">ResetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```go
func ResetDisabledAlerts()
```

##### `ResetEmailAccountAdmins` <a name="ResetEmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```go
func ResetEmailAccountAdmins()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">EmailAccountAdminsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins">EmailAccountAdmins</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```go
func DisabledAlertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdminsInput`<sup>Optional</sup> <a name="EmailAccountAdminsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```go
func EmailAccountAdminsInput() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```go
func DisabledAlerts() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdmins`<sup>Required</sup> <a name="EmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```go
func EmailAccountAdmins() *string
```

- *Type:* *string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlDatabaseThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---


### MssqlDatabaseTimeoutsOutputReference <a name="MssqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqldatabase"

mssqldatabase.NewMssqlDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



