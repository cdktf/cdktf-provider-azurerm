# `mssqlDatabase` Submodule <a name="`mssqlDatabase` Submodule" id="@cdktf/provider-azurerm.mssqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabase <a name="MssqlDatabase" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database azurerm_mssql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabase(scope: Construct, id: string, config: MssqlDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport">putImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy">putLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy">putShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy">putThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes">resetAutoPauseDelayInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId">resetCreationSourceDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId">resetElasticPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType">resetEnclaveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled">resetGeoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport">resetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled">resetLedgerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy">resetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName">resetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb">resetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount">resetReadReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale">resetReadScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId">resetRecoverDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId">resetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId">resetRestoreDroppedDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId">resetRestoreLongTermRetentionBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime">resetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName">resetSampleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType">resetSecondaryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy">resetShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy">resetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled">resetTransparentDataEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled">resetTransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId">resetTransparentDataEncryptionKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity"></a>

```typescript
public putIdentity(value: MssqlDatabaseIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `putImport` <a name="putImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport"></a>

```typescript
public putImport(value: MssqlDatabaseImport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `putLongTermRetentionPolicy` <a name="putLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy"></a>

```typescript
public putLongTermRetentionPolicy(value: MssqlDatabaseLongTermRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `putShortTermRetentionPolicy` <a name="putShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy"></a>

```typescript
public putShortTermRetentionPolicy(value: MssqlDatabaseShortTermRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `putThreatDetectionPolicy` <a name="putThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy"></a>

```typescript
public putThreatDetectionPolicy(value: MssqlDatabaseThreatDetectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---

##### `resetAutoPauseDelayInMinutes` <a name="resetAutoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes"></a>

```typescript
public resetAutoPauseDelayInMinutes(): void
```

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation"></a>

```typescript
public resetCollation(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetCreationSourceDatabaseId` <a name="resetCreationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId"></a>

```typescript
public resetCreationSourceDatabaseId(): void
```

##### `resetElasticPoolId` <a name="resetElasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId"></a>

```typescript
public resetElasticPoolId(): void
```

##### `resetEnclaveType` <a name="resetEnclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType"></a>

```typescript
public resetEnclaveType(): void
```

##### `resetGeoBackupEnabled` <a name="resetGeoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled"></a>

```typescript
public resetGeoBackupEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetImport` <a name="resetImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport"></a>

```typescript
public resetImport(): void
```

##### `resetLedgerEnabled` <a name="resetLedgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled"></a>

```typescript
public resetLedgerEnabled(): void
```

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetLongTermRetentionPolicy` <a name="resetLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy"></a>

```typescript
public resetLongTermRetentionPolicy(): void
```

##### `resetMaintenanceConfigurationName` <a name="resetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName"></a>

```typescript
public resetMaintenanceConfigurationName(): void
```

##### `resetMaxSizeGb` <a name="resetMaxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb"></a>

```typescript
public resetMaxSizeGb(): void
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity"></a>

```typescript
public resetMinCapacity(): void
```

##### `resetReadReplicaCount` <a name="resetReadReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount"></a>

```typescript
public resetReadReplicaCount(): void
```

##### `resetReadScale` <a name="resetReadScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale"></a>

```typescript
public resetReadScale(): void
```

##### `resetRecoverDatabaseId` <a name="resetRecoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId"></a>

```typescript
public resetRecoverDatabaseId(): void
```

##### `resetRecoveryPointId` <a name="resetRecoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId"></a>

```typescript
public resetRecoveryPointId(): void
```

##### `resetRestoreDroppedDatabaseId` <a name="resetRestoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId"></a>

```typescript
public resetRestoreDroppedDatabaseId(): void
```

##### `resetRestoreLongTermRetentionBackupId` <a name="resetRestoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId"></a>

```typescript
public resetRestoreLongTermRetentionBackupId(): void
```

##### `resetRestorePointInTime` <a name="resetRestorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime"></a>

```typescript
public resetRestorePointInTime(): void
```

##### `resetSampleName` <a name="resetSampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName"></a>

```typescript
public resetSampleName(): void
```

##### `resetSecondaryType` <a name="resetSecondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType"></a>

```typescript
public resetSecondaryType(): void
```

##### `resetShortTermRetentionPolicy` <a name="resetShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy"></a>

```typescript
public resetShortTermRetentionPolicy(): void
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName"></a>

```typescript
public resetSkuName(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreatDetectionPolicy` <a name="resetThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy"></a>

```typescript
public resetThreatDetectionPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransparentDataEncryptionEnabled` <a name="resetTransparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled"></a>

```typescript
public resetTransparentDataEncryptionEnabled(): void
```

##### `resetTransparentDataEncryptionKeyAutomaticRotationEnabled` <a name="resetTransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```typescript
public resetTransparentDataEncryptionKeyAutomaticRotationEnabled(): void
```

##### `resetTransparentDataEncryptionKeyVaultKeyId` <a name="resetTransparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId"></a>

```typescript
public resetTransparentDataEncryptionKeyVaultKeyId(): void
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant"></a>

```typescript
public resetZoneRedundant(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

mssqlDatabase.MssqlDatabase.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

mssqlDatabase.MssqlDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

mssqlDatabase.MssqlDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

mssqlDatabase.MssqlDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy">shortTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput">autoPauseDelayInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput">collationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput">creationSourceDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput">elasticPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput">enclaveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput">geoBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput">importInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput">ledgerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput">longTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput">maintenanceConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput">maxSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput">minCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput">readReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput">readScaleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput">recoverDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput">recoveryPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput">restoreDroppedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput">restoreLongTermRetentionBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput">sampleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput">secondaryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput">shortTermRetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput">threatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput">transparentDataEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput">transparentDataEncryptionKeyAutomaticRotationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput">transparentDataEncryptionKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes">autoPauseDelayInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId">creationSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId">elasticPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType">enclaveType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled">geoBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled">ledgerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb">maxSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale">readScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId">recoverDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId">restoreDroppedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId">restoreLongTermRetentionBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName">sampleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType">secondaryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled">transparentDataEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled">transparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId">transparentDataEncryptionKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity"></a>

```typescript
public readonly identity: MssqlDatabaseIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a>

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import"></a>

```typescript
public readonly import: MssqlDatabaseImportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a>

---

##### `longTermRetentionPolicy`<sup>Required</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy"></a>

```typescript
public readonly longTermRetentionPolicy: MssqlDatabaseLongTermRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `shortTermRetentionPolicy`<sup>Required</sup> <a name="shortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy"></a>

```typescript
public readonly shortTermRetentionPolicy: MssqlDatabaseShortTermRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a>

---

##### `threatDetectionPolicy`<sup>Required</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: MssqlDatabaseThreatDetectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a>

---

##### `autoPauseDelayInMinutesInput`<sup>Optional</sup> <a name="autoPauseDelayInMinutesInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput"></a>

```typescript
public readonly autoPauseDelayInMinutesInput: number;
```

- *Type:* number

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput"></a>

```typescript
public readonly collationInput: string;
```

- *Type:* string

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `creationSourceDatabaseIdInput`<sup>Optional</sup> <a name="creationSourceDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput"></a>

```typescript
public readonly creationSourceDatabaseIdInput: string;
```

- *Type:* string

---

##### `elasticPoolIdInput`<sup>Optional</sup> <a name="elasticPoolIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput"></a>

```typescript
public readonly elasticPoolIdInput: string;
```

- *Type:* string

---

##### `enclaveTypeInput`<sup>Optional</sup> <a name="enclaveTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput"></a>

```typescript
public readonly enclaveTypeInput: string;
```

- *Type:* string

---

##### `geoBackupEnabledInput`<sup>Optional</sup> <a name="geoBackupEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput"></a>

```typescript
public readonly geoBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput"></a>

```typescript
public readonly identityInput: MssqlDatabaseIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importInput`<sup>Optional</sup> <a name="importInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput"></a>

```typescript
public readonly importInput: MssqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `ledgerEnabledInput`<sup>Optional</sup> <a name="ledgerEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput"></a>

```typescript
public readonly ledgerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `longTermRetentionPolicyInput`<sup>Optional</sup> <a name="longTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput"></a>

```typescript
public readonly longTermRetentionPolicyInput: MssqlDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `maintenanceConfigurationNameInput`<sup>Optional</sup> <a name="maintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput"></a>

```typescript
public readonly maintenanceConfigurationNameInput: string;
```

- *Type:* string

---

##### `maxSizeGbInput`<sup>Optional</sup> <a name="maxSizeGbInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput"></a>

```typescript
public readonly maxSizeGbInput: number;
```

- *Type:* number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput"></a>

```typescript
public readonly minCapacityInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readReplicaCountInput`<sup>Optional</sup> <a name="readReplicaCountInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput"></a>

```typescript
public readonly readReplicaCountInput: number;
```

- *Type:* number

---

##### `readScaleInput`<sup>Optional</sup> <a name="readScaleInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput"></a>

```typescript
public readonly readScaleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoverDatabaseIdInput`<sup>Optional</sup> <a name="recoverDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput"></a>

```typescript
public readonly recoverDatabaseIdInput: string;
```

- *Type:* string

---

##### `recoveryPointIdInput`<sup>Optional</sup> <a name="recoveryPointIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput"></a>

```typescript
public readonly recoveryPointIdInput: string;
```

- *Type:* string

---

##### `restoreDroppedDatabaseIdInput`<sup>Optional</sup> <a name="restoreDroppedDatabaseIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput"></a>

```typescript
public readonly restoreDroppedDatabaseIdInput: string;
```

- *Type:* string

---

##### `restoreLongTermRetentionBackupIdInput`<sup>Optional</sup> <a name="restoreLongTermRetentionBackupIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput"></a>

```typescript
public readonly restoreLongTermRetentionBackupIdInput: string;
```

- *Type:* string

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput"></a>

```typescript
public readonly restorePointInTimeInput: string;
```

- *Type:* string

---

##### `sampleNameInput`<sup>Optional</sup> <a name="sampleNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput"></a>

```typescript
public readonly sampleNameInput: string;
```

- *Type:* string

---

##### `secondaryTypeInput`<sup>Optional</sup> <a name="secondaryTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput"></a>

```typescript
public readonly secondaryTypeInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `shortTermRetentionPolicyInput`<sup>Optional</sup> <a name="shortTermRetentionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput"></a>

```typescript
public readonly shortTermRetentionPolicyInput: MssqlDatabaseShortTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `threatDetectionPolicyInput`<sup>Optional</sup> <a name="threatDetectionPolicyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput"></a>

```typescript
public readonly threatDetectionPolicyInput: MssqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---

##### `transparentDataEncryptionEnabledInput`<sup>Optional</sup> <a name="transparentDataEncryptionEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput"></a>

```typescript
public readonly transparentDataEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transparentDataEncryptionKeyAutomaticRotationEnabledInput`<sup>Optional</sup> <a name="transparentDataEncryptionKeyAutomaticRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput"></a>

```typescript
public readonly transparentDataEncryptionKeyAutomaticRotationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transparentDataEncryptionKeyVaultKeyIdInput`<sup>Optional</sup> <a name="transparentDataEncryptionKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput"></a>

```typescript
public readonly transparentDataEncryptionKeyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput"></a>

```typescript
public readonly zoneRedundantInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoPauseDelayInMinutes`<sup>Required</sup> <a name="autoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes"></a>

```typescript
public readonly autoPauseDelayInMinutes: number;
```

- *Type:* number

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `creationSourceDatabaseId`<sup>Required</sup> <a name="creationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId"></a>

```typescript
public readonly creationSourceDatabaseId: string;
```

- *Type:* string

---

##### `elasticPoolId`<sup>Required</sup> <a name="elasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId"></a>

```typescript
public readonly elasticPoolId: string;
```

- *Type:* string

---

##### `enclaveType`<sup>Required</sup> <a name="enclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType"></a>

```typescript
public readonly enclaveType: string;
```

- *Type:* string

---

##### `geoBackupEnabled`<sup>Required</sup> <a name="geoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled"></a>

```typescript
public readonly geoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ledgerEnabled`<sup>Required</sup> <a name="ledgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled"></a>

```typescript
public readonly ledgerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `maintenanceConfigurationName`<sup>Required</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

---

##### `maxSizeGb`<sup>Required</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readReplicaCount`<sup>Required</sup> <a name="readReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

---

##### `readScale`<sup>Required</sup> <a name="readScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale"></a>

```typescript
public readonly readScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recoverDatabaseId`<sup>Required</sup> <a name="recoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId"></a>

```typescript
public readonly recoverDatabaseId: string;
```

- *Type:* string

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

---

##### `restoreDroppedDatabaseId`<sup>Required</sup> <a name="restoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId"></a>

```typescript
public readonly restoreDroppedDatabaseId: string;
```

- *Type:* string

---

##### `restoreLongTermRetentionBackupId`<sup>Required</sup> <a name="restoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId"></a>

```typescript
public readonly restoreLongTermRetentionBackupId: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `sampleName`<sup>Required</sup> <a name="sampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName"></a>

```typescript
public readonly sampleName: string;
```

- *Type:* string

---

##### `secondaryType`<sup>Required</sup> <a name="secondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType"></a>

```typescript
public readonly secondaryType: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transparentDataEncryptionEnabled`<sup>Required</sup> <a name="transparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled"></a>

```typescript
public readonly transparentDataEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Required</sup> <a name="transparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```typescript
public readonly transparentDataEncryptionKeyAutomaticRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transparentDataEncryptionKeyVaultKeyId`<sup>Required</sup> <a name="transparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId"></a>

```typescript
public readonly transparentDataEncryptionKeyVaultKeyId: string;
```

- *Type:* string

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseConfig <a name="MssqlDatabaseConfig" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseConfig: mssqlDatabase.MssqlDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#name MssqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes">autoPauseDelayInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation">collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#collation MssqlDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId">creationSourceDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId">elasticPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType">enclaveType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled">geoBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#id MssqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled">ledgerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType">licenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy">longTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName">maintenanceConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb">maxSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity">minCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale">readScale</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId">recoverDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId">restoreDroppedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId">restoreLongTermRetentionBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName">sampleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType">secondaryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy">shortTermRetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | short_term_retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#tags MssqlDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled">transparentDataEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled">transparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId">transparentDataEncryptionKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#name MssqlDatabase#name}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}.

---

##### `autoPauseDelayInMinutes`<sup>Optional</sup> <a name="autoPauseDelayInMinutes" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes"></a>

```typescript
public readonly autoPauseDelayInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#collation MssqlDatabase#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}.

---

##### `creationSourceDatabaseId`<sup>Optional</sup> <a name="creationSourceDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId"></a>

```typescript
public readonly creationSourceDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}.

---

##### `elasticPoolId`<sup>Optional</sup> <a name="elasticPoolId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId"></a>

```typescript
public readonly elasticPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}.

---

##### `enclaveType`<sup>Optional</sup> <a name="enclaveType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType"></a>

```typescript
public readonly enclaveType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}.

---

##### `geoBackupEnabled`<sup>Optional</sup> <a name="geoBackupEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled"></a>

```typescript
public readonly geoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#id MssqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity"></a>

```typescript
public readonly identity: MssqlDatabaseIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#identity MssqlDatabase#identity}

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import"></a>

```typescript
public readonly import: MssqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#import MssqlDatabase#import}

---

##### `ledgerEnabled`<sup>Optional</sup> <a name="ledgerEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled"></a>

```typescript
public readonly ledgerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}.

---

##### `longTermRetentionPolicy`<sup>Optional</sup> <a name="longTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy"></a>

```typescript
public readonly longTermRetentionPolicy: MssqlDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#long_term_retention_policy MssqlDatabase#long_term_retention_policy}

---

##### `maintenanceConfigurationName`<sup>Optional</sup> <a name="maintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName"></a>

```typescript
public readonly maintenanceConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb"></a>

```typescript
public readonly maxSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}.

---

##### `readReplicaCount`<sup>Optional</sup> <a name="readReplicaCount" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}.

---

##### `readScale`<sup>Optional</sup> <a name="readScale" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale"></a>

```typescript
public readonly readScale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}.

---

##### `recoverDatabaseId`<sup>Optional</sup> <a name="recoverDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId"></a>

```typescript
public readonly recoverDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}.

---

##### `recoveryPointId`<sup>Optional</sup> <a name="recoveryPointId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}.

---

##### `restoreDroppedDatabaseId`<sup>Optional</sup> <a name="restoreDroppedDatabaseId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId"></a>

```typescript
public readonly restoreDroppedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}.

---

##### `restoreLongTermRetentionBackupId`<sup>Optional</sup> <a name="restoreLongTermRetentionBackupId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId"></a>

```typescript
public readonly restoreLongTermRetentionBackupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}.

---

##### `sampleName`<sup>Optional</sup> <a name="sampleName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName"></a>

```typescript
public readonly sampleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}.

---

##### `secondaryType`<sup>Optional</sup> <a name="secondaryType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType"></a>

```typescript
public readonly secondaryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}.

---

##### `shortTermRetentionPolicy`<sup>Optional</sup> <a name="shortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy"></a>

```typescript
public readonly shortTermRetentionPolicy: MssqlDatabaseShortTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

short_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#short_term_retention_policy MssqlDatabase#short_term_retention_policy}

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#tags MssqlDatabase#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: MssqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#threat_detection_policy MssqlDatabase#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#timeouts MssqlDatabase#timeouts}

---

##### `transparentDataEncryptionEnabled`<sup>Optional</sup> <a name="transparentDataEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled"></a>

```typescript
public readonly transparentDataEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}.

---

##### `transparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Optional</sup> <a name="transparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```typescript
public readonly transparentDataEncryptionKeyAutomaticRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}.

---

##### `transparentDataEncryptionKeyVaultKeyId`<sup>Optional</sup> <a name="transparentDataEncryptionKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId"></a>

```typescript
public readonly transparentDataEncryptionKeyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}.

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant"></a>

```typescript
public readonly zoneRedundant: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}.

---

### MssqlDatabaseIdentity <a name="MssqlDatabaseIdentity" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseIdentity: mssqlDatabase.MssqlDatabaseIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#type MssqlDatabase#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#type MssqlDatabase#type}.

---

### MssqlDatabaseImport <a name="MssqlDatabaseImport" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseImport: mssqlDatabase.MssqlDatabaseImport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey">storageKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType">storageKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri">storageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}. |

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}.

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey"></a>

```typescript
public readonly storageKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}.

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType"></a>

```typescript
public readonly storageKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}.

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri"></a>

```typescript
public readonly storageUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}.

---

##### `storageAccountId`<sup>Optional</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}.

---

### MssqlDatabaseLongTermRetentionPolicy <a name="MssqlDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseLongTermRetentionPolicy: mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled">immutableBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#immutable_backups_enabled MssqlDatabase#immutable_backups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention">monthlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention">weeklyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear">weekOfYear</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention">yearlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}. |

---

##### `immutableBackupsEnabled`<sup>Optional</sup> <a name="immutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.immutableBackupsEnabled"></a>

```typescript
public readonly immutableBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#immutable_backups_enabled MssqlDatabase#immutable_backups_enabled}.

---

##### `monthlyRetention`<sup>Optional</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```typescript
public readonly monthlyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}.

---

##### `weeklyRetention`<sup>Optional</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```typescript
public readonly weeklyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}.

---

##### `weekOfYear`<sup>Optional</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```typescript
public readonly weekOfYear: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}.

---

##### `yearlyRetention`<sup>Optional</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```typescript
public readonly yearlyRetention: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}.

---

### MssqlDatabaseShortTermRetentionPolicy <a name="MssqlDatabaseShortTermRetentionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseShortTermRetentionPolicy: mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours">backupIntervalInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}. |

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `backupIntervalInHours`<sup>Optional</sup> <a name="backupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours"></a>

```typescript
public readonly backupIntervalInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}.

---

### MssqlDatabaseThreatDetectionPolicy <a name="MssqlDatabaseThreatDetectionPolicy" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseThreatDetectionPolicy: mssqlDatabase.MssqlDatabaseThreatDetectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#email_account_admins MssqlDatabase#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#state MssqlDatabase#state}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}. |

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#email_account_admins MssqlDatabase#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#state MssqlDatabase#state}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}.

---

### MssqlDatabaseTimeouts <a name="MssqlDatabaseTimeouts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

const mssqlDatabaseTimeouts: mssqlDatabase.MssqlDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#create MssqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#delete MssqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read MssqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#update MssqlDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#create MssqlDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#delete MssqlDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#read MssqlDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/mssql_database#update MssqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseIdentityOutputReference <a name="MssqlDatabaseIdentityOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlDatabaseIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---


### MssqlDatabaseImportOutputReference <a name="MssqlDatabaseImportOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseImportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId">resetStorageAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageAccountId` <a name="resetStorageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId"></a>

```typescript
public resetStorageAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput">storageKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput">storageKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput">storageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey">storageKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType">storageKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri">storageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `storageKeyInput`<sup>Optional</sup> <a name="storageKeyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput"></a>

```typescript
public readonly storageKeyInput: string;
```

- *Type:* string

---

##### `storageKeyTypeInput`<sup>Optional</sup> <a name="storageKeyTypeInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput"></a>

```typescript
public readonly storageKeyTypeInput: string;
```

- *Type:* string

---

##### `storageUriInput`<sup>Optional</sup> <a name="storageUriInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput"></a>

```typescript
public readonly storageUriInput: string;
```

- *Type:* string

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey"></a>

```typescript
public readonly storageKey: string;
```

- *Type:* string

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType"></a>

```typescript
public readonly storageKeyType: string;
```

- *Type:* string

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri"></a>

```typescript
public readonly storageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlDatabaseImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---


### MssqlDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled">resetImmutableBackupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">resetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">resetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">resetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">resetYearlyRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmutableBackupsEnabled` <a name="resetImmutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetImmutableBackupsEnabled"></a>

```typescript
public resetImmutableBackupsEnabled(): void
```

##### `resetMonthlyRetention` <a name="resetMonthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```typescript
public resetMonthlyRetention(): void
```

##### `resetWeeklyRetention` <a name="resetWeeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```typescript
public resetWeeklyRetention(): void
```

##### `resetWeekOfYear` <a name="resetWeekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```typescript
public resetWeekOfYear(): void
```

##### `resetYearlyRetention` <a name="resetYearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```typescript
public resetYearlyRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput">immutableBackupsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">monthlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">weeklyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">weekOfYearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">yearlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">immutableBackupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">monthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">weeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">weekOfYear</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">yearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immutableBackupsEnabledInput`<sup>Optional</sup> <a name="immutableBackupsEnabledInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabledInput"></a>

```typescript
public readonly immutableBackupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyRetentionInput`<sup>Optional</sup> <a name="monthlyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```typescript
public readonly monthlyRetentionInput: string;
```

- *Type:* string

---

##### `weeklyRetentionInput`<sup>Optional</sup> <a name="weeklyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```typescript
public readonly weeklyRetentionInput: string;
```

- *Type:* string

---

##### `weekOfYearInput`<sup>Optional</sup> <a name="weekOfYearInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```typescript
public readonly weekOfYearInput: number;
```

- *Type:* number

---

##### `yearlyRetentionInput`<sup>Optional</sup> <a name="yearlyRetentionInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```typescript
public readonly yearlyRetentionInput: string;
```

- *Type:* string

---

##### `immutableBackupsEnabled`<sup>Required</sup> <a name="immutableBackupsEnabled" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```typescript
public readonly immutableBackupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyRetention`<sup>Required</sup> <a name="monthlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```typescript
public readonly monthlyRetention: string;
```

- *Type:* string

---

##### `weeklyRetention`<sup>Required</sup> <a name="weeklyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```typescript
public readonly weeklyRetention: string;
```

- *Type:* string

---

##### `weekOfYear`<sup>Required</sup> <a name="weekOfYear" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```typescript
public readonly weekOfYear: number;
```

- *Type:* number

---

##### `yearlyRetention`<sup>Required</sup> <a name="yearlyRetention" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```typescript
public readonly yearlyRetention: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlDatabaseLongTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---


### MssqlDatabaseShortTermRetentionPolicyOutputReference <a name="MssqlDatabaseShortTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours">resetBackupIntervalInHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupIntervalInHours` <a name="resetBackupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours"></a>

```typescript
public resetBackupIntervalInHours(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput">backupIntervalInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours">backupIntervalInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupIntervalInHoursInput`<sup>Optional</sup> <a name="backupIntervalInHoursInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput"></a>

```typescript
public readonly backupIntervalInHoursInput: number;
```

- *Type:* number

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `backupIntervalInHours`<sup>Required</sup> <a name="backupIntervalInHours" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours"></a>

```typescript
public readonly backupIntervalInHours: number;
```

- *Type:* number

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlDatabaseShortTermRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---


### MssqlDatabaseThreatDetectionPolicyOutputReference <a name="MssqlDatabaseThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```typescript
public resetDisabledAlerts(): void
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```typescript
public resetEmailAccountAdmins(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```typescript
public readonly disabledAlertsInput: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```typescript
public readonly emailAccountAdminsInput: string;
```

- *Type:* string

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: string;
```

- *Type:* string

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MssqlDatabaseThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---


### MssqlDatabaseTimeoutsOutputReference <a name="MssqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlDatabase } from '@cdktf/provider-azurerm'

new mssqlDatabase.MssqlDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---



