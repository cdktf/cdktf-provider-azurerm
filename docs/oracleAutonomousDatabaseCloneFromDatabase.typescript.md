# `oracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`oracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromDatabase <a name="OracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

new oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase(scope: Construct, id: string, config: OracleAutonomousDatabaseCloneFromDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses">resetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel">resetRefreshableModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleAutonomousDatabaseCloneFromDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `resetAllowedIpAddresses` <a name="resetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses"></a>

```typescript
public resetAllowedIpAddresses(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefreshableModel` <a name="resetRefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel"></a>

```typescript
public resetRefreshableModel(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput">allowedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput">autoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput">autoScalingForStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput">computeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput">customerContactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput">databaseWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput">dataStorageSizeInTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput">nationalCharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput">refreshableModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">databaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel">refreshableModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `allowedIpAddressesInput`<sup>Optional</sup> <a name="allowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput"></a>

```typescript
public readonly allowedIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `autoScalingEnabledInput`<sup>Optional</sup> <a name="autoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput"></a>

```typescript
public readonly autoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="autoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput"></a>

```typescript
public readonly autoScalingForStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput"></a>

```typescript
public readonly backupRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput"></a>

```typescript
public readonly computeModelInput: string;
```

- *Type:* string

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: string[];
```

- *Type:* string[]

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `databaseWorkloadInput`<sup>Optional</sup> <a name="databaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput"></a>

```typescript
public readonly databaseWorkloadInput: string;
```

- *Type:* string

---

##### `dataStorageSizeInTbInput`<sup>Optional</sup> <a name="dataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput"></a>

```typescript
public readonly dataStorageSizeInTbInput: number;
```

- *Type:* number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput"></a>

```typescript
public readonly mtlsConnectionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nationalCharacterSetInput`<sup>Optional</sup> <a name="nationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput"></a>

```typescript
public readonly nationalCharacterSetInput: string;
```

- *Type:* string

---

##### `refreshableModelInput`<sup>Optional</sup> <a name="refreshableModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput"></a>

```typescript
public readonly refreshableModelInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput"></a>

```typescript
public readonly sourceAutonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleAutonomousDatabaseCloneFromDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `allowedIpAddresses`<sup>Required</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```typescript
public readonly allowedIpAddresses: string[];
```

- *Type:* string[]

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```typescript
public readonly autoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```typescript
public readonly autoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```typescript
public readonly databaseWorkload: string;
```

- *Type:* string

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```typescript
public readonly dataStorageSizeInTb: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```typescript
public readonly nationalCharacterSet: string;
```

- *Type:* string

---

##### `refreshableModel`<sup>Required</sup> <a name="refreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel"></a>

```typescript
public readonly refreshableModel: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromDatabaseConfig <a name="OracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

const oracleAutonomousDatabaseCloneFromDatabaseConfig: oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet">characterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType">cloneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount">computeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel">computeModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload">databaseWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses">allowedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel">refreshableModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled"></a>

```typescript
public readonly autoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled"></a>

```typescript
public readonly autoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload"></a>

```typescript
public readonly databaseWorkload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb"></a>

```typescript
public readonly dataStorageSizeInTb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet"></a>

```typescript
public readonly nationalCharacterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `allowedIpAddresses`<sup>Optional</sup> <a name="allowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses"></a>

```typescript
public readonly allowedIpAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshableModel`<sup>Optional</sup> <a name="refreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel"></a>

```typescript
public readonly refreshableModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleAutonomousDatabaseCloneFromDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

const oracleAutonomousDatabaseCloneFromDatabaseTimeouts: oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleAutonomousDatabaseCloneFromDatabase } from '@cdktf/provider-azurerm'

new oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleAutonomousDatabaseCloneFromDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



