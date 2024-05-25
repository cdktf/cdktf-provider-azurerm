# `cosmosdbPostgresqlCluster` Submodule <a name="`cosmosdbPostgresqlCluster` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlCluster <a name="CosmosdbPostgresqlCluster" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster azurerm_cosmosdb_postgresql_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster(scope: Construct, id: string, config: CosmosdbPostgresqlClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig">CosmosdbPostgresqlClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig">CosmosdbPostgresqlClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword">resetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion">resetCitusVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled">resetCoordinatorPublicIpAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition">resetCoordinatorServerEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb">resetCoordinatorStorageQuotaInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount">resetCoordinatorVcoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled">resetHaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled">resetNodePublicIpAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition">resetNodeServerEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb">resetNodeStorageQuotaInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores">resetNodeVcores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc">resetPointInTimeInUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone">resetPreferredPrimaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled">resetShardsOnCoordinatorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId">resetSourceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion">resetSqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: CosmosdbPostgresqlClusterMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbPostgresqlClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

---

##### `resetAdministratorLoginPassword` <a name="resetAdministratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword"></a>

```typescript
public resetAdministratorLoginPassword(): void
```

##### `resetCitusVersion` <a name="resetCitusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion"></a>

```typescript
public resetCitusVersion(): void
```

##### `resetCoordinatorPublicIpAccessEnabled` <a name="resetCoordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled"></a>

```typescript
public resetCoordinatorPublicIpAccessEnabled(): void
```

##### `resetCoordinatorServerEdition` <a name="resetCoordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition"></a>

```typescript
public resetCoordinatorServerEdition(): void
```

##### `resetCoordinatorStorageQuotaInMb` <a name="resetCoordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb"></a>

```typescript
public resetCoordinatorStorageQuotaInMb(): void
```

##### `resetCoordinatorVcoreCount` <a name="resetCoordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount"></a>

```typescript
public resetCoordinatorVcoreCount(): void
```

##### `resetHaEnabled` <a name="resetHaEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled"></a>

```typescript
public resetHaEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetNodePublicIpAccessEnabled` <a name="resetNodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled"></a>

```typescript
public resetNodePublicIpAccessEnabled(): void
```

##### `resetNodeServerEdition` <a name="resetNodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition"></a>

```typescript
public resetNodeServerEdition(): void
```

##### `resetNodeStorageQuotaInMb` <a name="resetNodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb"></a>

```typescript
public resetNodeStorageQuotaInMb(): void
```

##### `resetNodeVcores` <a name="resetNodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores"></a>

```typescript
public resetNodeVcores(): void
```

##### `resetPointInTimeInUtc` <a name="resetPointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc"></a>

```typescript
public resetPointInTimeInUtc(): void
```

##### `resetPreferredPrimaryZone` <a name="resetPreferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone"></a>

```typescript
public resetPreferredPrimaryZone(): void
```

##### `resetShardsOnCoordinatorEnabled` <a name="resetShardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled"></a>

```typescript
public resetShardsOnCoordinatorEnabled(): void
```

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation"></a>

```typescript
public resetSourceLocation(): void
```

##### `resetSourceResourceId` <a name="resetSourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId"></a>

```typescript
public resetSourceResourceId(): void
```

##### `resetSqlVersion` <a name="resetSqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion"></a>

```typescript
public resetSqlVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbPostgresqlCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbPostgresqlCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime">earliestRestoreTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput">citusVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput">coordinatorPublicIpAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput">coordinatorServerEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput">coordinatorStorageQuotaInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput">coordinatorVcoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput">haEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput">nodePublicIpAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput">nodeServerEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput">nodeStorageQuotaInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput">nodeVcoresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput">pointInTimeInUtcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput">preferredPrimaryZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput">shardsOnCoordinatorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput">sourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput">sourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput">sqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion">citusVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled">coordinatorPublicIpAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition">coordinatorServerEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb">coordinatorStorageQuotaInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount">coordinatorVcoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled">haEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled">nodePublicIpAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition">nodeServerEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb">nodeStorageQuotaInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores">nodeVcores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc">pointInTimeInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone">preferredPrimaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled">shardsOnCoordinatorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion">sqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `earliestRestoreTime`<sup>Required</sup> <a name="earliestRestoreTime" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime"></a>

```typescript
public readonly earliestRestoreTime: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: CosmosdbPostgresqlClusterMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a>

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers"></a>

```typescript
public readonly servers: CosmosdbPostgresqlClusterServersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a>

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput"></a>

```typescript
public readonly administratorLoginPasswordInput: string;
```

- *Type:* string

---

##### `citusVersionInput`<sup>Optional</sup> <a name="citusVersionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput"></a>

```typescript
public readonly citusVersionInput: string;
```

- *Type:* string

---

##### `coordinatorPublicIpAccessEnabledInput`<sup>Optional</sup> <a name="coordinatorPublicIpAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput"></a>

```typescript
public readonly coordinatorPublicIpAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `coordinatorServerEditionInput`<sup>Optional</sup> <a name="coordinatorServerEditionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput"></a>

```typescript
public readonly coordinatorServerEditionInput: string;
```

- *Type:* string

---

##### `coordinatorStorageQuotaInMbInput`<sup>Optional</sup> <a name="coordinatorStorageQuotaInMbInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput"></a>

```typescript
public readonly coordinatorStorageQuotaInMbInput: number;
```

- *Type:* number

---

##### `coordinatorVcoreCountInput`<sup>Optional</sup> <a name="coordinatorVcoreCountInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput"></a>

```typescript
public readonly coordinatorVcoreCountInput: number;
```

- *Type:* number

---

##### `haEnabledInput`<sup>Optional</sup> <a name="haEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput"></a>

```typescript
public readonly haEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: CosmosdbPostgresqlClusterMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodePublicIpAccessEnabledInput`<sup>Optional</sup> <a name="nodePublicIpAccessEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput"></a>

```typescript
public readonly nodePublicIpAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodeServerEditionInput`<sup>Optional</sup> <a name="nodeServerEditionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput"></a>

```typescript
public readonly nodeServerEditionInput: string;
```

- *Type:* string

---

##### `nodeStorageQuotaInMbInput`<sup>Optional</sup> <a name="nodeStorageQuotaInMbInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput"></a>

```typescript
public readonly nodeStorageQuotaInMbInput: number;
```

- *Type:* number

---

##### `nodeVcoresInput`<sup>Optional</sup> <a name="nodeVcoresInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput"></a>

```typescript
public readonly nodeVcoresInput: number;
```

- *Type:* number

---

##### `pointInTimeInUtcInput`<sup>Optional</sup> <a name="pointInTimeInUtcInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput"></a>

```typescript
public readonly pointInTimeInUtcInput: string;
```

- *Type:* string

---

##### `preferredPrimaryZoneInput`<sup>Optional</sup> <a name="preferredPrimaryZoneInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput"></a>

```typescript
public readonly preferredPrimaryZoneInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `shardsOnCoordinatorEnabledInput`<sup>Optional</sup> <a name="shardsOnCoordinatorEnabledInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput"></a>

```typescript
public readonly shardsOnCoordinatorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput"></a>

```typescript
public readonly sourceLocationInput: string;
```

- *Type:* string

---

##### `sourceResourceIdInput`<sup>Optional</sup> <a name="sourceResourceIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput"></a>

```typescript
public readonly sourceResourceIdInput: string;
```

- *Type:* string

---

##### `sqlVersionInput`<sup>Optional</sup> <a name="sqlVersionInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput"></a>

```typescript
public readonly sqlVersionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbPostgresqlClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

---

##### `citusVersion`<sup>Required</sup> <a name="citusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion"></a>

```typescript
public readonly citusVersion: string;
```

- *Type:* string

---

##### `coordinatorPublicIpAccessEnabled`<sup>Required</sup> <a name="coordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled"></a>

```typescript
public readonly coordinatorPublicIpAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `coordinatorServerEdition`<sup>Required</sup> <a name="coordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition"></a>

```typescript
public readonly coordinatorServerEdition: string;
```

- *Type:* string

---

##### `coordinatorStorageQuotaInMb`<sup>Required</sup> <a name="coordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb"></a>

```typescript
public readonly coordinatorStorageQuotaInMb: number;
```

- *Type:* number

---

##### `coordinatorVcoreCount`<sup>Required</sup> <a name="coordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount"></a>

```typescript
public readonly coordinatorVcoreCount: number;
```

- *Type:* number

---

##### `haEnabled`<sup>Required</sup> <a name="haEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled"></a>

```typescript
public readonly haEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nodePublicIpAccessEnabled`<sup>Required</sup> <a name="nodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled"></a>

```typescript
public readonly nodePublicIpAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nodeServerEdition`<sup>Required</sup> <a name="nodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition"></a>

```typescript
public readonly nodeServerEdition: string;
```

- *Type:* string

---

##### `nodeStorageQuotaInMb`<sup>Required</sup> <a name="nodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb"></a>

```typescript
public readonly nodeStorageQuotaInMb: number;
```

- *Type:* number

---

##### `nodeVcores`<sup>Required</sup> <a name="nodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores"></a>

```typescript
public readonly nodeVcores: number;
```

- *Type:* number

---

##### `pointInTimeInUtc`<sup>Required</sup> <a name="pointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc"></a>

```typescript
public readonly pointInTimeInUtc: string;
```

- *Type:* string

---

##### `preferredPrimaryZone`<sup>Required</sup> <a name="preferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone"></a>

```typescript
public readonly preferredPrimaryZone: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `shardsOnCoordinatorEnabled`<sup>Required</sup> <a name="shardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled"></a>

```typescript
public readonly shardsOnCoordinatorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

---

##### `sourceResourceId`<sup>Required</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

---

##### `sqlVersion`<sup>Required</sup> <a name="sqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion"></a>

```typescript
public readonly sqlVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlClusterConfig <a name="CosmosdbPostgresqlClusterConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlClusterConfig: cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion">citusVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled">coordinatorPublicIpAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition">coordinatorServerEdition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb">coordinatorStorageQuotaInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount">coordinatorVcoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled">haEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled">nodePublicIpAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition">nodeServerEdition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb">nodeStorageQuotaInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores">nodeVcores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc">pointInTimeInUtc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone">preferredPrimaryZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled">shardsOnCoordinatorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId">sourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion">sqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}.

---

##### `administratorLoginPassword`<sup>Optional</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword"></a>

```typescript
public readonly administratorLoginPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}.

---

##### `citusVersion`<sup>Optional</sup> <a name="citusVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion"></a>

```typescript
public readonly citusVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}.

---

##### `coordinatorPublicIpAccessEnabled`<sup>Optional</sup> <a name="coordinatorPublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled"></a>

```typescript
public readonly coordinatorPublicIpAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}.

---

##### `coordinatorServerEdition`<sup>Optional</sup> <a name="coordinatorServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition"></a>

```typescript
public readonly coordinatorServerEdition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}.

---

##### `coordinatorStorageQuotaInMb`<sup>Optional</sup> <a name="coordinatorStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb"></a>

```typescript
public readonly coordinatorStorageQuotaInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}.

---

##### `coordinatorVcoreCount`<sup>Optional</sup> <a name="coordinatorVcoreCount" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount"></a>

```typescript
public readonly coordinatorVcoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}.

---

##### `haEnabled`<sup>Optional</sup> <a name="haEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled"></a>

```typescript
public readonly haEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: CosmosdbPostgresqlClusterMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#maintenance_window CosmosdbPostgresqlCluster#maintenance_window}

---

##### `nodePublicIpAccessEnabled`<sup>Optional</sup> <a name="nodePublicIpAccessEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled"></a>

```typescript
public readonly nodePublicIpAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}.

---

##### `nodeServerEdition`<sup>Optional</sup> <a name="nodeServerEdition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition"></a>

```typescript
public readonly nodeServerEdition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}.

---

##### `nodeStorageQuotaInMb`<sup>Optional</sup> <a name="nodeStorageQuotaInMb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb"></a>

```typescript
public readonly nodeStorageQuotaInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}.

---

##### `nodeVcores`<sup>Optional</sup> <a name="nodeVcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores"></a>

```typescript
public readonly nodeVcores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}.

---

##### `pointInTimeInUtc`<sup>Optional</sup> <a name="pointInTimeInUtc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc"></a>

```typescript
public readonly pointInTimeInUtc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}.

---

##### `preferredPrimaryZone`<sup>Optional</sup> <a name="preferredPrimaryZone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone"></a>

```typescript
public readonly preferredPrimaryZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}.

---

##### `shardsOnCoordinatorEnabled`<sup>Optional</sup> <a name="shardsOnCoordinatorEnabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled"></a>

```typescript
public readonly shardsOnCoordinatorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}.

---

##### `sourceResourceId`<sup>Optional</sup> <a name="sourceResourceId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId"></a>

```typescript
public readonly sourceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}.

---

##### `sqlVersion`<sup>Optional</sup> <a name="sqlVersion" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion"></a>

```typescript
public readonly sqlVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbPostgresqlClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#timeouts CosmosdbPostgresqlCluster#timeouts}

---

### CosmosdbPostgresqlClusterMaintenanceWindow <a name="CosmosdbPostgresqlClusterMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlClusterMaintenanceWindow: cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour">startHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute">startMinute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}.

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}.

---

##### `startMinute`<sup>Optional</sup> <a name="startMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}.

---

### CosmosdbPostgresqlClusterServers <a name="CosmosdbPostgresqlClusterServers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlClusterServers: cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers = { ... }
```


### CosmosdbPostgresqlClusterTimeouts <a name="CosmosdbPostgresqlClusterTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

const cosmosdbPostgresqlClusterTimeouts: cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlClusterMaintenanceWindowOutputReference <a name="CosmosdbPostgresqlClusterMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour">resetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute">resetStartMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetStartHour` <a name="resetStartHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour"></a>

```typescript
public resetStartHour(): void
```

##### `resetStartMinute` <a name="resetStartMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute"></a>

```typescript
public resetStartMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput">startMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute">startMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: number;
```

- *Type:* number

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput"></a>

```typescript
public readonly startHourInput: number;
```

- *Type:* number

---

##### `startMinuteInput`<sup>Optional</sup> <a name="startMinuteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```typescript
public readonly startMinuteInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: number;
```

- *Type:* number

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `startMinute`<sup>Required</sup> <a name="startMinute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute"></a>

```typescript
public readonly startMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbPostgresqlClusterMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---


### CosmosdbPostgresqlClusterServersList <a name="CosmosdbPostgresqlClusterServersList" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get"></a>

```typescript
public get(index: number): CosmosdbPostgresqlClusterServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CosmosdbPostgresqlClusterServersOutputReference <a name="CosmosdbPostgresqlClusterServersOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbPostgresqlClusterServers;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a>

---


### CosmosdbPostgresqlClusterTimeoutsOutputReference <a name="CosmosdbPostgresqlClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbPostgresqlCluster } from '@cdktf/provider-azurerm'

new cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbPostgresqlClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

---



