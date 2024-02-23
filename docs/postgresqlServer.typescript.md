# `postgresqlServer` Submodule <a name="`postgresqlServer` Submodule" id="@cdktf/provider-azurerm.postgresqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlServer <a name="PostgresqlServer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server azurerm_postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

new postgresqlServer.PostgresqlServer(scope: Construct, id: string, config: PostgresqlServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig">PostgresqlServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig">PostgresqlServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy">putThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLogin">resetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLoginPassword">resetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAutoGrowEnabled">resetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetBackupRetentionDays">resetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreationSourceServerId">resetCreationSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetGeoRedundantBackupEnabled">resetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetRestorePointInTime">resetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetSslMinimalTlsVersionEnforced">resetSslMinimalTlsVersionEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetStorageMb">resetStorageMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetThreatDetectionPolicy">resetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity"></a>

```typescript
public putIdentity(value: PostgresqlServerIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

---

##### `putThreatDetectionPolicy` <a name="putThreatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy"></a>

```typescript
public putThreatDetectionPolicy(value: PostgresqlServerThreatDetectionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresqlServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

---

##### `resetAdministratorLogin` <a name="resetAdministratorLogin" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLogin"></a>

```typescript
public resetAdministratorLogin(): void
```

##### `resetAdministratorLoginPassword` <a name="resetAdministratorLoginPassword" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLoginPassword"></a>

```typescript
public resetAdministratorLoginPassword(): void
```

##### `resetAutoGrowEnabled` <a name="resetAutoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAutoGrowEnabled"></a>

```typescript
public resetAutoGrowEnabled(): void
```

##### `resetBackupRetentionDays` <a name="resetBackupRetentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetBackupRetentionDays"></a>

```typescript
public resetBackupRetentionDays(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetCreationSourceServerId` <a name="resetCreationSourceServerId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreationSourceServerId"></a>

```typescript
public resetCreationSourceServerId(): void
```

##### `resetGeoRedundantBackupEnabled` <a name="resetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetGeoRedundantBackupEnabled"></a>

```typescript
public resetGeoRedundantBackupEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetInfrastructureEncryptionEnabled"></a>

```typescript
public resetInfrastructureEncryptionEnabled(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetRestorePointInTime` <a name="resetRestorePointInTime" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetRestorePointInTime"></a>

```typescript
public resetRestorePointInTime(): void
```

##### `resetSslMinimalTlsVersionEnforced` <a name="resetSslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetSslMinimalTlsVersionEnforced"></a>

```typescript
public resetSslMinimalTlsVersionEnforced(): void
```

##### `resetStorageMb` <a name="resetStorageMb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetStorageMb"></a>

```typescript
public resetStorageMb(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreatDetectionPolicy` <a name="resetThreatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetThreatDetectionPolicy"></a>

```typescript
public resetThreatDetectionPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

postgresqlServer.PostgresqlServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

postgresqlServer.PostgresqlServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

postgresqlServer.PostgresqlServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

postgresqlServer.PostgresqlServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PostgresqlServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference">PostgresqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference">PostgresqlServerThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference">PostgresqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabledInput">autoGrowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDaysInput">backupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerIdInput">creationSourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabledInput">geoRedundantBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabledInput">sslEnforcementEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforcedInput">sslMinimalTlsVersionEnforcedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMbInput">storageMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicyInput">threatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerId">creationSourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabled">sslEnforcementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforced">sslMinimalTlsVersionEnforced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMb">storageMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identity"></a>

```typescript
public readonly identity: PostgresqlServerIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference">PostgresqlServerIdentityOutputReference</a>

---

##### `threatDetectionPolicy`<sup>Required</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: PostgresqlServerThreatDetectionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference">PostgresqlServerThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference">PostgresqlServerTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `autoGrowEnabledInput`<sup>Optional</sup> <a name="autoGrowEnabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabledInput"></a>

```typescript
public readonly autoGrowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDaysInput`<sup>Optional</sup> <a name="backupRetentionDaysInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDaysInput"></a>

```typescript
public readonly backupRetentionDaysInput: number;
```

- *Type:* number

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `creationSourceServerIdInput`<sup>Optional</sup> <a name="creationSourceServerIdInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerIdInput"></a>

```typescript
public readonly creationSourceServerIdInput: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="geoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabledInput"></a>

```typescript
public readonly geoRedundantBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identityInput"></a>

```typescript
public readonly identityInput: PostgresqlServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTimeInput"></a>

```typescript
public readonly restorePointInTimeInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `sslEnforcementEnabledInput`<sup>Optional</sup> <a name="sslEnforcementEnabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabledInput"></a>

```typescript
public readonly sslEnforcementEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslMinimalTlsVersionEnforcedInput`<sup>Optional</sup> <a name="sslMinimalTlsVersionEnforcedInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```typescript
public readonly sslMinimalTlsVersionEnforcedInput: string;
```

- *Type:* string

---

##### `storageMbInput`<sup>Optional</sup> <a name="storageMbInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMbInput"></a>

```typescript
public readonly storageMbInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `threatDetectionPolicyInput`<sup>Optional</sup> <a name="threatDetectionPolicyInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicyInput"></a>

```typescript
public readonly threatDetectionPolicyInput: PostgresqlServerThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresqlServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `autoGrowEnabled`<sup>Required</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `creationSourceServerId`<sup>Required</sup> <a name="creationSourceServerId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerId"></a>

```typescript
public readonly creationSourceServerId: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `sslEnforcementEnabled`<sup>Required</sup> <a name="sslEnforcementEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabled"></a>

```typescript
public readonly sslEnforcementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslMinimalTlsVersionEnforced`<sup>Required</sup> <a name="sslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforced"></a>

```typescript
public readonly sslMinimalTlsVersionEnforced: string;
```

- *Type:* string

---

##### `storageMb`<sup>Required</sup> <a name="storageMb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlServerConfig <a name="PostgresqlServerConfig" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

const postgresqlServerConfig: postgresqlServer.PostgresqlServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#location PostgresqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#name PostgresqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslEnforcementEnabled">sslEnforcementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#version PostgresqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.creationSourceServerId">creationSourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#id PostgresqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.restorePointInTime">restorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslMinimalTlsVersionEnforced">sslMinimalTlsVersionEnforced</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.storageMb">storageMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#location PostgresqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#name PostgresqlServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}.

---

##### `sslEnforcementEnabled`<sup>Required</sup> <a name="sslEnforcementEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslEnforcementEnabled"></a>

```typescript
public readonly sslEnforcementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#version PostgresqlServer#version}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}.

---

##### `autoGrowEnabled`<sup>Optional</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}.

---

##### `backupRetentionDays`<sup>Optional</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}.

---

##### `creationSourceServerId`<sup>Optional</sup> <a name="creationSourceServerId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.creationSourceServerId"></a>

```typescript
public readonly creationSourceServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#id PostgresqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.identity"></a>

```typescript
public readonly identity: PostgresqlServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#identity PostgresqlServer#identity}

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.restorePointInTime"></a>

```typescript
public readonly restorePointInTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}.

---

##### `sslMinimalTlsVersionEnforced`<sup>Optional</sup> <a name="sslMinimalTlsVersionEnforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```typescript
public readonly sslMinimalTlsVersionEnforced: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}.

---

##### `storageMb`<sup>Optional</sup> <a name="storageMb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.threatDetectionPolicy"></a>

```typescript
public readonly threatDetectionPolicy: PostgresqlServerThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#threat_detection_policy PostgresqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#timeouts PostgresqlServer#timeouts}

---

### PostgresqlServerIdentity <a name="PostgresqlServerIdentity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

const postgresqlServerIdentity: postgresqlServer.PostgresqlServerIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#type PostgresqlServer#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#type PostgresqlServer#type}.

---

### PostgresqlServerThreatDetectionPolicy <a name="PostgresqlServerThreatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

const postgresqlServerThreatDetectionPolicy: postgresqlServer.PostgresqlServerThreatDetectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#disabled_alerts PostgresqlServer#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#email_account_admins PostgresqlServer#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#email_addresses PostgresqlServer#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#enabled PostgresqlServer#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#retention_days PostgresqlServer#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_account_access_key PostgresqlServer#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_endpoint PostgresqlServer#storage_endpoint}. |

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#disabled_alerts PostgresqlServer#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#email_account_admins PostgresqlServer#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#email_addresses PostgresqlServer#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#enabled PostgresqlServer#enabled}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#retention_days PostgresqlServer#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_account_access_key PostgresqlServer#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#storage_endpoint PostgresqlServer#storage_endpoint}.

---

### PostgresqlServerTimeouts <a name="PostgresqlServerTimeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

const postgresqlServerTimeouts: postgresqlServer.PostgresqlServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#create PostgresqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#delete PostgresqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#read PostgresqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#update PostgresqlServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#create PostgresqlServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#delete PostgresqlServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#read PostgresqlServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/postgresql_server#update PostgresqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlServerIdentityOutputReference <a name="PostgresqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

new postgresqlServer.PostgresqlServerIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

---


### PostgresqlServerThreatDetectionPolicyOutputReference <a name="PostgresqlServerThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

new postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```typescript
public resetDisabledAlerts(): void
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```typescript
public resetEmailAccountAdmins(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```typescript
public readonly disabledAlertsInput: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```typescript
public readonly emailAccountAdminsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```typescript
public readonly emailAccountAdmins: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlServerThreatDetectionPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

---


### PostgresqlServerTimeoutsOutputReference <a name="PostgresqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresqlServer } from '@cdktf/provider-azurerm'

new postgresqlServer.PostgresqlServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresqlServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

---



