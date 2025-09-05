# `postgresqlFlexibleServer` Submodule <a name="`postgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServer <a name="PostgresqlFlexibleServer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server azurerm_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServer(scope: Construct, id: string, config: PostgresqlFlexibleServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig">PostgresqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig">PostgresqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability">putHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorLogin">resetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPassword">resetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPasswordWo">resetAdministratorPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPasswordWoVersion">resetAdministratorPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAutoGrowEnabled">resetAutoGrowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetBackupRetentionDays">resetBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetDelegatedSubnetId">resetDelegatedSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetGeoRedundantBackupEnabled">resetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetHighAvailability">resetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPointInTimeRestoreTimeInUtc">resetPointInTimeRestoreTimeInUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPrivateDnsZoneId">resetPrivateDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetReplicationRole">resetReplicationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSourceServerId">resetSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageMb">resetStorageMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication"></a>

```typescript
public putAuthentication(value: PostgresqlFlexibleServerAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: PostgresqlFlexibleServerCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

---

##### `putHighAvailability` <a name="putHighAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability"></a>

```typescript
public putHighAvailability(value: PostgresqlFlexibleServerHighAvailability): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity"></a>

```typescript
public putIdentity(value: PostgresqlFlexibleServerIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: PostgresqlFlexibleServerMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresqlFlexibleServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

---

##### `resetAdministratorLogin` <a name="resetAdministratorLogin" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorLogin"></a>

```typescript
public resetAdministratorLogin(): void
```

##### `resetAdministratorPassword` <a name="resetAdministratorPassword" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPassword"></a>

```typescript
public resetAdministratorPassword(): void
```

##### `resetAdministratorPasswordWo` <a name="resetAdministratorPasswordWo" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPasswordWo"></a>

```typescript
public resetAdministratorPasswordWo(): void
```

##### `resetAdministratorPasswordWoVersion` <a name="resetAdministratorPasswordWoVersion" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPasswordWoVersion"></a>

```typescript
public resetAdministratorPasswordWoVersion(): void
```

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetAutoGrowEnabled` <a name="resetAutoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAutoGrowEnabled"></a>

```typescript
public resetAutoGrowEnabled(): void
```

##### `resetBackupRetentionDays` <a name="resetBackupRetentionDays" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetBackupRetentionDays"></a>

```typescript
public resetBackupRetentionDays(): void
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCreateMode"></a>

```typescript
public resetCreateMode(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDelegatedSubnetId` <a name="resetDelegatedSubnetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetDelegatedSubnetId"></a>

```typescript
public resetDelegatedSubnetId(): void
```

##### `resetGeoRedundantBackupEnabled` <a name="resetGeoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetGeoRedundantBackupEnabled"></a>

```typescript
public resetGeoRedundantBackupEnabled(): void
```

##### `resetHighAvailability` <a name="resetHighAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetHighAvailability"></a>

```typescript
public resetHighAvailability(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetPointInTimeRestoreTimeInUtc` <a name="resetPointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPointInTimeRestoreTimeInUtc"></a>

```typescript
public resetPointInTimeRestoreTimeInUtc(): void
```

##### `resetPrivateDnsZoneId` <a name="resetPrivateDnsZoneId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPrivateDnsZoneId"></a>

```typescript
public resetPrivateDnsZoneId(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetReplicationRole` <a name="resetReplicationRole" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetReplicationRole"></a>

```typescript
public resetReplicationRole(): void
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSkuName"></a>

```typescript
public resetSkuName(): void
```

##### `resetSourceServerId` <a name="resetSourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSourceServerId"></a>

```typescript
public resetSourceServerId(): void
```

##### `resetStorageMb` <a name="resetStorageMb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageMb"></a>

```typescript
public resetStorageMb(): void
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageTier"></a>

```typescript
public resetStorageTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference">PostgresqlFlexibleServerAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference">PostgresqlFlexibleServerCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailability">highAvailability</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference">PostgresqlFlexibleServerHighAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference">PostgresqlFlexibleServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference">PostgresqlFlexibleServerMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference">PostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLoginInput">administratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordInput">administratorPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoInput">administratorPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoVersionInput">administratorPasswordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.autoGrowEnabledInput">autoGrowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDaysInput">backupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createModeInput">createModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetIdInput">delegatedSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabledInput">geoRedundantBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailabilityInput">highAvailabilityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput">pointInTimeRestoreTimeInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneIdInput">privateDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRoleInput">replicationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerIdInput">sourceServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMbInput">storageMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageTierInput">storageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createMode">createMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetId">delegatedSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtc">pointInTimeRestoreTimeInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRole">replicationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMb">storageMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageTier">storageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authentication"></a>

```typescript
public readonly authentication: PostgresqlFlexibleServerAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference">PostgresqlFlexibleServerAuthenticationOutputReference</a>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: PostgresqlFlexibleServerCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference">PostgresqlFlexibleServerCustomerManagedKeyOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailability"></a>

```typescript
public readonly highAvailability: PostgresqlFlexibleServerHighAvailabilityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference">PostgresqlFlexibleServerHighAvailabilityOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identity"></a>

```typescript
public readonly identity: PostgresqlFlexibleServerIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference">PostgresqlFlexibleServerIdentityOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: PostgresqlFlexibleServerMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference">PostgresqlFlexibleServerMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference">PostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLoginInput"></a>

```typescript
public readonly administratorLoginInput: string;
```

- *Type:* string

---

##### `administratorPasswordInput`<sup>Optional</sup> <a name="administratorPasswordInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordInput"></a>

```typescript
public readonly administratorPasswordInput: string;
```

- *Type:* string

---

##### `administratorPasswordWoInput`<sup>Optional</sup> <a name="administratorPasswordWoInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoInput"></a>

```typescript
public readonly administratorPasswordWoInput: string;
```

- *Type:* string

---

##### `administratorPasswordWoVersionInput`<sup>Optional</sup> <a name="administratorPasswordWoVersionInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoVersionInput"></a>

```typescript
public readonly administratorPasswordWoVersionInput: number;
```

- *Type:* number

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: PostgresqlFlexibleServerAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

---

##### `autoGrowEnabledInput`<sup>Optional</sup> <a name="autoGrowEnabledInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.autoGrowEnabledInput"></a>

```typescript
public readonly autoGrowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDaysInput`<sup>Optional</sup> <a name="backupRetentionDaysInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDaysInput"></a>

```typescript
public readonly backupRetentionDaysInput: number;
```

- *Type:* number

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createModeInput"></a>

```typescript
public readonly createModeInput: string;
```

- *Type:* string

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: PostgresqlFlexibleServerCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

---

##### `delegatedSubnetIdInput`<sup>Optional</sup> <a name="delegatedSubnetIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetIdInput"></a>

```typescript
public readonly delegatedSubnetIdInput: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="geoRedundantBackupEnabledInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabledInput"></a>

```typescript
public readonly geoRedundantBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `highAvailabilityInput`<sup>Optional</sup> <a name="highAvailabilityInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailabilityInput"></a>

```typescript
public readonly highAvailabilityInput: PostgresqlFlexibleServerHighAvailability;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identityInput"></a>

```typescript
public readonly identityInput: PostgresqlFlexibleServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: PostgresqlFlexibleServerMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pointInTimeRestoreTimeInUtcInput`<sup>Optional</sup> <a name="pointInTimeRestoreTimeInUtcInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput"></a>

```typescript
public readonly pointInTimeRestoreTimeInUtcInput: string;
```

- *Type:* string

---

##### `privateDnsZoneIdInput`<sup>Optional</sup> <a name="privateDnsZoneIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneIdInput"></a>

```typescript
public readonly privateDnsZoneIdInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationRoleInput`<sup>Optional</sup> <a name="replicationRoleInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRoleInput"></a>

```typescript
public readonly replicationRoleInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `sourceServerIdInput`<sup>Optional</sup> <a name="sourceServerIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerIdInput"></a>

```typescript
public readonly sourceServerIdInput: string;
```

- *Type:* string

---

##### `storageMbInput`<sup>Optional</sup> <a name="storageMbInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMbInput"></a>

```typescript
public readonly storageMbInput: number;
```

- *Type:* number

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageTierInput"></a>

```typescript
public readonly storageTierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

---

##### `administratorPassword`<sup>Required</sup> <a name="administratorPassword" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

---

##### `administratorPasswordWo`<sup>Required</sup> <a name="administratorPasswordWo" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWo"></a>

```typescript
public readonly administratorPasswordWo: string;
```

- *Type:* string

---

##### `administratorPasswordWoVersion`<sup>Required</sup> <a name="administratorPasswordWoVersion" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordWoVersion"></a>

```typescript
public readonly administratorPasswordWoVersion: number;
```

- *Type:* number

---

##### `autoGrowEnabled`<sup>Required</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

---

##### `delegatedSubnetId`<sup>Required</sup> <a name="delegatedSubnetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetId"></a>

```typescript
public readonly delegatedSubnetId: string;
```

- *Type:* string

---

##### `geoRedundantBackupEnabled`<sup>Required</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pointInTimeRestoreTimeInUtc`<sup>Required</sup> <a name="pointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtc"></a>

```typescript
public readonly pointInTimeRestoreTimeInUtc: string;
```

- *Type:* string

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationRole`<sup>Required</sup> <a name="replicationRole" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRole"></a>

```typescript
public readonly replicationRole: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

---

##### `storageMb`<sup>Required</sup> <a name="storageMb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerAuthentication <a name="PostgresqlFlexibleServerAuthentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerAuthentication: postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.activeDirectoryAuthEnabled">activeDirectoryAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#active_directory_auth_enabled PostgresqlFlexibleServer#active_directory_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.passwordAuthEnabled">passwordAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#password_auth_enabled PostgresqlFlexibleServer#password_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#tenant_id PostgresqlFlexibleServer#tenant_id}. |

---

##### `activeDirectoryAuthEnabled`<sup>Optional</sup> <a name="activeDirectoryAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.activeDirectoryAuthEnabled"></a>

```typescript
public readonly activeDirectoryAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#active_directory_auth_enabled PostgresqlFlexibleServer#active_directory_auth_enabled}.

---

##### `passwordAuthEnabled`<sup>Optional</sup> <a name="passwordAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.passwordAuthEnabled"></a>

```typescript
public readonly passwordAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#password_auth_enabled PostgresqlFlexibleServer#password_auth_enabled}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#tenant_id PostgresqlFlexibleServer#tenant_id}.

---

### PostgresqlFlexibleServerConfig <a name="PostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerConfig: postgresqlFlexibleServer.PostgresqlFlexibleServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorLogin">administratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPassword">administratorPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPasswordWo">administratorPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password_wo PostgresqlFlexibleServer#administrator_password_wo}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPasswordWoVersion">administratorPasswordWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password_wo_version PostgresqlFlexibleServer#administrator_password_wo_version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.autoGrowEnabled">autoGrowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#auto_grow_enabled PostgresqlFlexibleServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.createMode">createMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.delegatedSubnetId">delegatedSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.geoRedundantBackupEnabled">geoRedundantBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.highAvailability">highAvailability</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | high_availability block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc">pointInTimeRestoreTimeInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#public_network_access_enabled PostgresqlFlexibleServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.replicationRole">replicationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageMb">storageMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageTier">storageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#storage_tier PostgresqlFlexibleServer#storage_tier}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}.

---

##### `administratorLogin`<sup>Optional</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorLogin"></a>

```typescript
public readonly administratorLogin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPassword"></a>

```typescript
public readonly administratorPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}.

---

##### `administratorPasswordWo`<sup>Optional</sup> <a name="administratorPasswordWo" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPasswordWo"></a>

```typescript
public readonly administratorPasswordWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password_wo PostgresqlFlexibleServer#administrator_password_wo}.

---

##### `administratorPasswordWoVersion`<sup>Optional</sup> <a name="administratorPasswordWoVersion" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPasswordWoVersion"></a>

```typescript
public readonly administratorPasswordWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#administrator_password_wo_version PostgresqlFlexibleServer#administrator_password_wo_version}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.authentication"></a>

```typescript
public readonly authentication: PostgresqlFlexibleServerAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#authentication PostgresqlFlexibleServer#authentication}

---

##### `autoGrowEnabled`<sup>Optional</sup> <a name="autoGrowEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.autoGrowEnabled"></a>

```typescript
public readonly autoGrowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#auto_grow_enabled PostgresqlFlexibleServer#auto_grow_enabled}.

---

##### `backupRetentionDays`<sup>Optional</sup> <a name="backupRetentionDays" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.createMode"></a>

```typescript
public readonly createMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: PostgresqlFlexibleServerCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#customer_managed_key PostgresqlFlexibleServer#customer_managed_key}

---

##### `delegatedSubnetId`<sup>Optional</sup> <a name="delegatedSubnetId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.delegatedSubnetId"></a>

```typescript
public readonly delegatedSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}.

---

##### `geoRedundantBackupEnabled`<sup>Optional</sup> <a name="geoRedundantBackupEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.geoRedundantBackupEnabled"></a>

```typescript
public readonly geoRedundantBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}.

---

##### `highAvailability`<sup>Optional</sup> <a name="highAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.highAvailability"></a>

```typescript
public readonly highAvailability: PostgresqlFlexibleServerHighAvailability;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

high_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#high_availability PostgresqlFlexibleServer#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.identity"></a>

```typescript
public readonly identity: PostgresqlFlexibleServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#identity PostgresqlFlexibleServer#identity}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: PostgresqlFlexibleServerMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#maintenance_window PostgresqlFlexibleServer#maintenance_window}

---

##### `pointInTimeRestoreTimeInUtc`<sup>Optional</sup> <a name="pointInTimeRestoreTimeInUtc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc"></a>

```typescript
public readonly pointInTimeRestoreTimeInUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}.

---

##### `privateDnsZoneId`<sup>Optional</sup> <a name="privateDnsZoneId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#public_network_access_enabled PostgresqlFlexibleServer#public_network_access_enabled}.

---

##### `replicationRole`<sup>Optional</sup> <a name="replicationRole" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.replicationRole"></a>

```typescript
public readonly replicationRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}.

---

##### `sourceServerId`<sup>Optional</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}.

---

##### `storageMb`<sup>Optional</sup> <a name="storageMb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageMb"></a>

```typescript
public readonly storageMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#storage_tier PostgresqlFlexibleServer#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresqlFlexibleServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#timeouts PostgresqlFlexibleServer#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}.

---

### PostgresqlFlexibleServerCustomerManagedKey <a name="PostgresqlFlexibleServerCustomerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerCustomerManagedKey: postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#key_vault_key_id PostgresqlFlexibleServer#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.geoBackupKeyVaultKeyId">geoBackupKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_backup_key_vault_key_id PostgresqlFlexibleServer#geo_backup_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.geoBackupUserAssignedIdentityId">geoBackupUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_backup_user_assigned_identity_id PostgresqlFlexibleServer#geo_backup_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId">primaryUserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#primary_user_assigned_identity_id PostgresqlFlexibleServer#primary_user_assigned_identity_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#key_vault_key_id PostgresqlFlexibleServer#key_vault_key_id}.

---

##### `geoBackupKeyVaultKeyId`<sup>Optional</sup> <a name="geoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.geoBackupKeyVaultKeyId"></a>

```typescript
public readonly geoBackupKeyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_backup_key_vault_key_id PostgresqlFlexibleServer#geo_backup_key_vault_key_id}.

---

##### `geoBackupUserAssignedIdentityId`<sup>Optional</sup> <a name="geoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.geoBackupUserAssignedIdentityId"></a>

```typescript
public readonly geoBackupUserAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#geo_backup_user_assigned_identity_id PostgresqlFlexibleServer#geo_backup_user_assigned_identity_id}.

---

##### `primaryUserAssignedIdentityId`<sup>Optional</sup> <a name="primaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId"></a>

```typescript
public readonly primaryUserAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#primary_user_assigned_identity_id PostgresqlFlexibleServer#primary_user_assigned_identity_id}.

---

### PostgresqlFlexibleServerHighAvailability <a name="PostgresqlFlexibleServerHighAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerHighAvailability: postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#mode PostgresqlFlexibleServer#mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.standbyAvailabilityZone">standbyAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#mode PostgresqlFlexibleServer#mode}.

---

##### `standbyAvailabilityZone`<sup>Optional</sup> <a name="standbyAvailabilityZone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.standbyAvailabilityZone"></a>

```typescript
public readonly standbyAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}.

---

### PostgresqlFlexibleServerIdentity <a name="PostgresqlFlexibleServerIdentity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerIdentity: postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#type PostgresqlFlexibleServer#type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#identity_ids PostgresqlFlexibleServer#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#type PostgresqlFlexibleServer#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#identity_ids PostgresqlFlexibleServer#identity_ids}.

---

### PostgresqlFlexibleServerMaintenanceWindow <a name="PostgresqlFlexibleServerMaintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerMaintenanceWindow: postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#day_of_week PostgresqlFlexibleServer#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startHour">startHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#start_hour PostgresqlFlexibleServer#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startMinute">startMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#start_minute PostgresqlFlexibleServer#start_minute}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#day_of_week PostgresqlFlexibleServer#day_of_week}.

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#start_hour PostgresqlFlexibleServer#start_hour}.

---

##### `startMinute`<sup>Optional</sup> <a name="startMinute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#start_minute PostgresqlFlexibleServer#start_minute}.

---

### PostgresqlFlexibleServerTimeouts <a name="PostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const postgresqlFlexibleServerTimeouts: postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#create PostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#delete PostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#read PostgresqlFlexibleServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#update PostgresqlFlexibleServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#create PostgresqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#delete PostgresqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#read PostgresqlFlexibleServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/postgresql_flexible_server#update PostgresqlFlexibleServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerAuthenticationOutputReference <a name="PostgresqlFlexibleServerAuthenticationOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetActiveDirectoryAuthEnabled">resetActiveDirectoryAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetPasswordAuthEnabled">resetPasswordAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryAuthEnabled` <a name="resetActiveDirectoryAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetActiveDirectoryAuthEnabled"></a>

```typescript
public resetActiveDirectoryAuthEnabled(): void
```

##### `resetPasswordAuthEnabled` <a name="resetPasswordAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetPasswordAuthEnabled"></a>

```typescript
public resetPasswordAuthEnabled(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabledInput">activeDirectoryAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabledInput">passwordAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabled">activeDirectoryAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabled">passwordAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryAuthEnabledInput`<sup>Optional</sup> <a name="activeDirectoryAuthEnabledInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabledInput"></a>

```typescript
public readonly activeDirectoryAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthEnabledInput`<sup>Optional</sup> <a name="passwordAuthEnabledInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabledInput"></a>

```typescript
public readonly passwordAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `activeDirectoryAuthEnabled`<sup>Required</sup> <a name="activeDirectoryAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabled"></a>

```typescript
public readonly activeDirectoryAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthEnabled`<sup>Required</sup> <a name="passwordAuthEnabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabled"></a>

```typescript
public readonly passwordAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlFlexibleServerAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

---


### PostgresqlFlexibleServerCustomerManagedKeyOutputReference <a name="PostgresqlFlexibleServerCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupKeyVaultKeyId">resetGeoBackupKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupUserAssignedIdentityId">resetGeoBackupUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId">resetPrimaryUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeoBackupKeyVaultKeyId` <a name="resetGeoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupKeyVaultKeyId"></a>

```typescript
public resetGeoBackupKeyVaultKeyId(): void
```

##### `resetGeoBackupUserAssignedIdentityId` <a name="resetGeoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetGeoBackupUserAssignedIdentityId"></a>

```typescript
public resetGeoBackupUserAssignedIdentityId(): void
```

##### `resetPrimaryUserAssignedIdentityId` <a name="resetPrimaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId"></a>

```typescript
public resetPrimaryUserAssignedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyIdInput">geoBackupKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityIdInput">geoBackupUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput">primaryUserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyId">geoBackupKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityId">geoBackupUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId">primaryUserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoBackupKeyVaultKeyIdInput`<sup>Optional</sup> <a name="geoBackupKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyIdInput"></a>

```typescript
public readonly geoBackupKeyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `geoBackupUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="geoBackupUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityIdInput"></a>

```typescript
public readonly geoBackupUserAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `primaryUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="primaryUserAssignedIdentityIdInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput"></a>

```typescript
public readonly primaryUserAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `geoBackupKeyVaultKeyId`<sup>Required</sup> <a name="geoBackupKeyVaultKeyId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupKeyVaultKeyId"></a>

```typescript
public readonly geoBackupKeyVaultKeyId: string;
```

- *Type:* string

---

##### `geoBackupUserAssignedIdentityId`<sup>Required</sup> <a name="geoBackupUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.geoBackupUserAssignedIdentityId"></a>

```typescript
public readonly geoBackupUserAssignedIdentityId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `primaryUserAssignedIdentityId`<sup>Required</sup> <a name="primaryUserAssignedIdentityId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId"></a>

```typescript
public readonly primaryUserAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlFlexibleServerCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

---


### PostgresqlFlexibleServerHighAvailabilityOutputReference <a name="PostgresqlFlexibleServerHighAvailabilityOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone">resetStandbyAvailabilityZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStandbyAvailabilityZone` <a name="resetStandbyAvailabilityZone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone"></a>

```typescript
public resetStandbyAvailabilityZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput">standbyAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">standbyAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `standbyAvailabilityZoneInput`<sup>Optional</sup> <a name="standbyAvailabilityZoneInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput"></a>

```typescript
public readonly standbyAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `standbyAvailabilityZone`<sup>Required</sup> <a name="standbyAvailabilityZone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```typescript
public readonly standbyAvailabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlFlexibleServerHighAvailability;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

---


### PostgresqlFlexibleServerIdentityOutputReference <a name="PostgresqlFlexibleServerIdentityOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlFlexibleServerIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

---


### PostgresqlFlexibleServerMaintenanceWindowOutputReference <a name="PostgresqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour">resetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute">resetStartMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetStartHour` <a name="resetStartHour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour"></a>

```typescript
public resetStartHour(): void
```

##### `resetStartMinute` <a name="resetStartMinute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute"></a>

```typescript
public resetStartMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput">startMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">startMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: number;
```

- *Type:* number

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput"></a>

```typescript
public readonly startHourInput: number;
```

- *Type:* number

---

##### `startMinuteInput`<sup>Optional</sup> <a name="startMinuteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```typescript
public readonly startMinuteInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `startMinute`<sup>Required</sup> <a name="startMinute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresqlFlexibleServerMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

---


### PostgresqlFlexibleServerTimeoutsOutputReference <a name="PostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

---



