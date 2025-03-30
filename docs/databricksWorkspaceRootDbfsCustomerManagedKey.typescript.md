# `databricksWorkspaceRootDbfsCustomerManagedKey` Submodule <a name="`databricksWorkspaceRootDbfsCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKey <a name="DatabricksWorkspaceRootDbfsCustomerManagedKey" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key azurerm_databricks_workspace_root_dbfs_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

new databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey(scope: Construct, id: string, config: DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig">DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig">DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksWorkspaceRootDbfsCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabricksWorkspaceRootDbfsCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksWorkspaceRootDbfsCustomerManagedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksWorkspaceRootDbfsCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspaceRootDbfsCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.Initializer"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

const databricksWorkspaceRootDbfsCustomerManagedKeyConfig: databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_key_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#workspace_id DatabricksWorkspaceRootDbfsCustomerManagedKey#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#id DatabricksWorkspaceRootDbfsCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_key_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_key_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#workspace_id DatabricksWorkspaceRootDbfsCustomerManagedKey#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#id DatabricksWorkspaceRootDbfsCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#timeouts DatabricksWorkspaceRootDbfsCustomerManagedKey#timeouts}

---

### DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.Initializer"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

const databricksWorkspaceRootDbfsCustomerManagedKeyTimeouts: databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#create DatabricksWorkspaceRootDbfsCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#delete DatabricksWorkspaceRootDbfsCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#read DatabricksWorkspaceRootDbfsCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#update DatabricksWorkspaceRootDbfsCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#create DatabricksWorkspaceRootDbfsCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#delete DatabricksWorkspaceRootDbfsCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#read DatabricksWorkspaceRootDbfsCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#update DatabricksWorkspaceRootDbfsCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { databricksWorkspaceRootDbfsCustomerManagedKey } from '@cdktf/provider-azurerm'

new databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

---



