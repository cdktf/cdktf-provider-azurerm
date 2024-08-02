# `cosmosdbCassandraCluster` Submodule <a name="`cosmosdbCassandraCluster` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraCluster <a name="CosmosdbCassandraCluster" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster azurerm_cosmosdb_cassandra_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

new cosmosdbCassandraCluster.CosmosdbCassandraCluster(scope: Construct, id: string, config: CosmosdbCassandraClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig">CosmosdbCassandraClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig">CosmosdbCassandraClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetClientCertificatePems">resetClientCertificatePems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalGossipCertificatePems">resetExternalGossipCertificatePems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalSeedNodeIpAddresses">resetExternalSeedNodeIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetHoursBetweenBackups">resetHoursBetweenBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetRepairEnabled">resetRepairEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity"></a>

```typescript
public putIdentity(value: CosmosdbCassandraClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: CosmosdbCassandraClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetAuthenticationMethod"></a>

```typescript
public resetAuthenticationMethod(): void
```

##### `resetClientCertificatePems` <a name="resetClientCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetClientCertificatePems"></a>

```typescript
public resetClientCertificatePems(): void
```

##### `resetExternalGossipCertificatePems` <a name="resetExternalGossipCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalGossipCertificatePems"></a>

```typescript
public resetExternalGossipCertificatePems(): void
```

##### `resetExternalSeedNodeIpAddresses` <a name="resetExternalSeedNodeIpAddresses" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetExternalSeedNodeIpAddresses"></a>

```typescript
public resetExternalSeedNodeIpAddresses(): void
```

##### `resetHoursBetweenBackups` <a name="resetHoursBetweenBackups" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetHoursBetweenBackups"></a>

```typescript
public resetHoursBetweenBackups(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetRepairEnabled` <a name="resetRepairEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetRepairEnabled"></a>

```typescript
public resetRepairEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbCassandraCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CosmosdbCassandraCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbCassandraCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbCassandraCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbCassandraCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference">CosmosdbCassandraClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference">CosmosdbCassandraClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePemsInput">clientCertificatePemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPasswordInput">defaultAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetIdInput">delegatedManagementSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePemsInput">externalGossipCertificatePemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddressesInput">externalSeedNodeIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackupsInput">hoursBetweenBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabledInput">repairEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePems">clientCertificatePems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPassword">defaultAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePems">externalGossipCertificatePems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddresses">externalSeedNodeIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackups">hoursBetweenBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabled">repairEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identity"></a>

```typescript
public readonly identity: CosmosdbCassandraClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference">CosmosdbCassandraClusterIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbCassandraClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference">CosmosdbCassandraClusterTimeoutsOutputReference</a>

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `clientCertificatePemsInput`<sup>Optional</sup> <a name="clientCertificatePemsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePemsInput"></a>

```typescript
public readonly clientCertificatePemsInput: string[];
```

- *Type:* string[]

---

##### `defaultAdminPasswordInput`<sup>Optional</sup> <a name="defaultAdminPasswordInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPasswordInput"></a>

```typescript
public readonly defaultAdminPasswordInput: string;
```

- *Type:* string

---

##### `delegatedManagementSubnetIdInput`<sup>Optional</sup> <a name="delegatedManagementSubnetIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetIdInput"></a>

```typescript
public readonly delegatedManagementSubnetIdInput: string;
```

- *Type:* string

---

##### `externalGossipCertificatePemsInput`<sup>Optional</sup> <a name="externalGossipCertificatePemsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePemsInput"></a>

```typescript
public readonly externalGossipCertificatePemsInput: string[];
```

- *Type:* string[]

---

##### `externalSeedNodeIpAddressesInput`<sup>Optional</sup> <a name="externalSeedNodeIpAddressesInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddressesInput"></a>

```typescript
public readonly externalSeedNodeIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `hoursBetweenBackupsInput`<sup>Optional</sup> <a name="hoursBetweenBackupsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackupsInput"></a>

```typescript
public readonly hoursBetweenBackupsInput: number;
```

- *Type:* number

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.identityInput"></a>

```typescript
public readonly identityInput: CosmosdbCassandraClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `repairEnabledInput`<sup>Optional</sup> <a name="repairEnabledInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabledInput"></a>

```typescript
public readonly repairEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CosmosdbCassandraClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `clientCertificatePems`<sup>Required</sup> <a name="clientCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.clientCertificatePems"></a>

```typescript
public readonly clientCertificatePems: string[];
```

- *Type:* string[]

---

##### `defaultAdminPassword`<sup>Required</sup> <a name="defaultAdminPassword" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.defaultAdminPassword"></a>

```typescript
public readonly defaultAdminPassword: string;
```

- *Type:* string

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.delegatedManagementSubnetId"></a>

```typescript
public readonly delegatedManagementSubnetId: string;
```

- *Type:* string

---

##### `externalGossipCertificatePems`<sup>Required</sup> <a name="externalGossipCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalGossipCertificatePems"></a>

```typescript
public readonly externalGossipCertificatePems: string[];
```

- *Type:* string[]

---

##### `externalSeedNodeIpAddresses`<sup>Required</sup> <a name="externalSeedNodeIpAddresses" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.externalSeedNodeIpAddresses"></a>

```typescript
public readonly externalSeedNodeIpAddresses: string[];
```

- *Type:* string[]

---

##### `hoursBetweenBackups`<sup>Required</sup> <a name="hoursBetweenBackups" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.hoursBetweenBackups"></a>

```typescript
public readonly hoursBetweenBackups: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repairEnabled`<sup>Required</sup> <a name="repairEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.repairEnabled"></a>

```typescript
public readonly repairEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraClusterConfig <a name="CosmosdbCassandraClusterConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

const cosmosdbCassandraClusterConfig: cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.defaultAdminPassword">defaultAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.clientCertificatePems">clientCertificatePems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalGossipCertificatePems">externalGossipCertificatePems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalSeedNodeIpAddresses">externalSeedNodeIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.hoursBetweenBackups">hoursBetweenBackups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.repairEnabled">repairEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAdminPassword`<sup>Required</sup> <a name="defaultAdminPassword" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.defaultAdminPassword"></a>

```typescript
public readonly defaultAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#default_admin_password CosmosdbCassandraCluster#default_admin_password}.

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.delegatedManagementSubnetId"></a>

```typescript
public readonly delegatedManagementSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#delegated_management_subnet_id CosmosdbCassandraCluster#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#location CosmosdbCassandraCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#name CosmosdbCassandraCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#resource_group_name CosmosdbCassandraCluster#resource_group_name}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#authentication_method CosmosdbCassandraCluster#authentication_method}.

---

##### `clientCertificatePems`<sup>Optional</sup> <a name="clientCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.clientCertificatePems"></a>

```typescript
public readonly clientCertificatePems: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#client_certificate_pems CosmosdbCassandraCluster#client_certificate_pems}.

---

##### `externalGossipCertificatePems`<sup>Optional</sup> <a name="externalGossipCertificatePems" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalGossipCertificatePems"></a>

```typescript
public readonly externalGossipCertificatePems: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#external_gossip_certificate_pems CosmosdbCassandraCluster#external_gossip_certificate_pems}.

---

##### `externalSeedNodeIpAddresses`<sup>Optional</sup> <a name="externalSeedNodeIpAddresses" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.externalSeedNodeIpAddresses"></a>

```typescript
public readonly externalSeedNodeIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#external_seed_node_ip_addresses CosmosdbCassandraCluster#external_seed_node_ip_addresses}.

---

##### `hoursBetweenBackups`<sup>Optional</sup> <a name="hoursBetweenBackups" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.hoursBetweenBackups"></a>

```typescript
public readonly hoursBetweenBackups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#hours_between_backups CosmosdbCassandraCluster#hours_between_backups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#id CosmosdbCassandraCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.identity"></a>

```typescript
public readonly identity: CosmosdbCassandraClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#identity CosmosdbCassandraCluster#identity}

---

##### `repairEnabled`<sup>Optional</sup> <a name="repairEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.repairEnabled"></a>

```typescript
public readonly repairEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#repair_enabled CosmosdbCassandraCluster#repair_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#tags CosmosdbCassandraCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CosmosdbCassandraClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#timeouts CosmosdbCassandraCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#version CosmosdbCassandraCluster#version}.

---

### CosmosdbCassandraClusterIdentity <a name="CosmosdbCassandraClusterIdentity" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

const cosmosdbCassandraClusterIdentity: cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#type CosmosdbCassandraCluster#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#type CosmosdbCassandraCluster#type}.

---

### CosmosdbCassandraClusterTimeouts <a name="CosmosdbCassandraClusterTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

const cosmosdbCassandraClusterTimeouts: cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#create CosmosdbCassandraCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#delete CosmosdbCassandraCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#read CosmosdbCassandraCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#update CosmosdbCassandraCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#create CosmosdbCassandraCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#delete CosmosdbCassandraCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#read CosmosdbCassandraCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_cassandra_cluster#update CosmosdbCassandraCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraClusterIdentityOutputReference <a name="CosmosdbCassandraClusterIdentityOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

new cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CosmosdbCassandraClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterIdentity">CosmosdbCassandraClusterIdentity</a>

---


### CosmosdbCassandraClusterTimeoutsOutputReference <a name="CosmosdbCassandraClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cosmosdbCassandraCluster } from '@cdktf/provider-azurerm'

new cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CosmosdbCassandraClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cosmosdbCassandraCluster.CosmosdbCassandraClusterTimeouts">CosmosdbCassandraClusterTimeouts</a>

---



