# `oracleExascaleDatabaseStorageVault` Submodule <a name="`oracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExascaleDatabaseStorageVault <a name="OracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

new oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault(scope: Construct, id: string, config: OracleExascaleDatabaseStorageVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage">putHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHighCapacityDatabaseStorage` <a name="putHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage"></a>

```typescript
public putHighCapacityDatabaseStorage(value: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleExascaleDatabaseStorageVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleExascaleDatabaseStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput">additionalFlashCachePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput">highCapacityDatabaseStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">additionalFlashCachePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```typescript
public readonly highCapacityDatabaseStorage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts"></a>

```typescript
public readonly timeouts: OracleExascaleDatabaseStorageVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `additionalFlashCachePercentageInput`<sup>Optional</sup> <a name="additionalFlashCachePercentageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput"></a>

```typescript
public readonly additionalFlashCachePercentageInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `highCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="highCapacityDatabaseStorageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput"></a>

```typescript
public readonly highCapacityDatabaseStorageInput: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleExascaleDatabaseStorageVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `additionalFlashCachePercentage`<sup>Required</sup> <a name="additionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```typescript
public readonly additionalFlashCachePercentage: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExascaleDatabaseStorageVaultConfig <a name="OracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

const oracleExascaleDatabaseStorageVaultConfig: oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage">additionalFlashCachePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage">highCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones">zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalFlashCachePercentage`<sup>Required</sup> <a name="additionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage"></a>

```typescript
public readonly additionalFlashCachePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `highCapacityDatabaseStorage`<sup>Required</sup> <a name="highCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```typescript
public readonly highCapacityDatabaseStorage: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleExascaleDatabaseStorageVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

const oracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage: oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb">totalSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}. |

---

##### `totalSizeInGb`<sup>Required</sup> <a name="totalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb"></a>

```typescript
public readonly totalSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

### OracleExascaleDatabaseStorageVaultTimeouts <a name="OracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

const oracleExascaleDatabaseStorageVaultTimeouts: oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

new oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">availableSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput">totalSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">totalSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableSizeInGb`<sup>Required</sup> <a name="availableSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```typescript
public readonly availableSizeInGb: number;
```

- *Type:* number

---

##### `totalSizeInGbInput`<sup>Optional</sup> <a name="totalSizeInGbInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput"></a>

```typescript
public readonly totalSizeInGbInput: number;
```

- *Type:* number

---

##### `totalSizeInGb`<sup>Required</sup> <a name="totalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```typescript
public readonly totalSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### OracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="OracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleExascaleDatabaseStorageVault } from '@cdktf/provider-azurerm'

new oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleExascaleDatabaseStorageVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---



