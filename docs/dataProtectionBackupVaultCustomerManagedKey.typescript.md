# `dataProtectionBackupVaultCustomerManagedKey` Submodule <a name="`dataProtectionBackupVaultCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupVaultCustomerManagedKey <a name="DataProtectionBackupVaultCustomerManagedKey" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key azurerm_data_protection_backup_vault_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

new dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey(scope: Construct, id: string, config: DataProtectionBackupVaultCustomerManagedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig">DataProtectionBackupVaultCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig">DataProtectionBackupVaultCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupVaultCustomerManagedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupVaultCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isConstruct"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformElement"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformResource"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataProtectionBackupVaultCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupVaultCustomerManagedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupVaultCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupVaultCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference">DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dataProtectionBackupVaultIdInput">dataProtectionBackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference">DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `dataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="dataProtectionBackupVaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dataProtectionBackupVaultIdInput"></a>

```typescript
public readonly dataProtectionBackupVaultIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupVaultCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a>

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.dataProtectionBackupVaultId"></a>

```typescript
public readonly dataProtectionBackupVaultId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupVaultCustomerManagedKeyConfig <a name="DataProtectionBackupVaultCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.Initializer"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

const dataProtectionBackupVaultCustomerManagedKeyConfig: dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#data_protection_backup_vault_id DataProtectionBackupVaultCustomerManagedKey#data_protection_backup_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#key_vault_key_id DataProtectionBackupVaultCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#id DataProtectionBackupVaultCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.dataProtectionBackupVaultId"></a>

```typescript
public readonly dataProtectionBackupVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#data_protection_backup_vault_id DataProtectionBackupVaultCustomerManagedKey#data_protection_backup_vault_id}.

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#key_vault_key_id DataProtectionBackupVaultCustomerManagedKey#key_vault_key_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#id DataProtectionBackupVaultCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupVaultCustomerManagedKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#timeouts DataProtectionBackupVaultCustomerManagedKey#timeouts}

---

### DataProtectionBackupVaultCustomerManagedKeyTimeouts <a name="DataProtectionBackupVaultCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

const dataProtectionBackupVaultCustomerManagedKeyTimeouts: dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#create DataProtectionBackupVaultCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#delete DataProtectionBackupVaultCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#read DataProtectionBackupVaultCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#update DataProtectionBackupVaultCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#create DataProtectionBackupVaultCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#delete DataProtectionBackupVaultCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#read DataProtectionBackupVaultCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/data_protection_backup_vault_customer_managed_key#update DataProtectionBackupVaultCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference <a name="DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupVaultCustomerManagedKey } from '@cdktf/provider-azurerm'

new dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupVaultCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupVaultCustomerManagedKey.DataProtectionBackupVaultCustomerManagedKeyTimeouts">DataProtectionBackupVaultCustomerManagedKeyTimeouts</a>

---



