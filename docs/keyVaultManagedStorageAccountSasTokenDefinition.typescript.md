# `keyVaultManagedStorageAccountSasTokenDefinition` Submodule <a name="`keyVaultManagedStorageAccountSasTokenDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinition <a name="KeyVaultManagedStorageAccountSasTokenDefinition" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition azurerm_key_vault_managed_storage_account_sas_token_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition(scope: Construct, id: string, config: KeyVaultManagedStorageAccountSasTokenDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedStorageAccountSasTokenDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedStorageAccountSasTokenDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedStorageAccountSasTokenDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput">managedStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput">sasTemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput">sasTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput">validityPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId">managedStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri">sasTemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType">sasType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod">validityPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedStorageAccountIdInput`<sup>Optional</sup> <a name="managedStorageAccountIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput"></a>

```typescript
public readonly managedStorageAccountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sasTemplateUriInput`<sup>Optional</sup> <a name="sasTemplateUriInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput"></a>

```typescript
public readonly sasTemplateUriInput: string;
```

- *Type:* string

---

##### `sasTypeInput`<sup>Optional</sup> <a name="sasTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput"></a>

```typescript
public readonly sasTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `validityPeriodInput`<sup>Optional</sup> <a name="validityPeriodInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput"></a>

```typescript
public readonly validityPeriodInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedStorageAccountId`<sup>Required</sup> <a name="managedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId"></a>

```typescript
public readonly managedStorageAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sasTemplateUri`<sup>Required</sup> <a name="sasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri"></a>

```typescript
public readonly sasTemplateUri: string;
```

- *Type:* string

---

##### `sasType`<sup>Required</sup> <a name="sasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType"></a>

```typescript
public readonly sasType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod"></a>

```typescript
public readonly validityPeriod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionConfig <a name="KeyVaultManagedStorageAccountSasTokenDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.Initializer"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

const keyVaultManagedStorageAccountSasTokenDefinitionConfig: keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId">managedStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri">sasTemplateUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType">sasType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod">validityPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedStorageAccountId`<sup>Required</sup> <a name="managedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId"></a>

```typescript
public readonly managedStorageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}.

---

##### `sasTemplateUri`<sup>Required</sup> <a name="sasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri"></a>

```typescript
public readonly sasTemplateUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}.

---

##### `sasType`<sup>Required</sup> <a name="sasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType"></a>

```typescript
public readonly sasType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}.

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod"></a>

```typescript
public readonly validityPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}

---

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.Initializer"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

const keyVaultManagedStorageAccountSasTokenDefinitionTimeouts: keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedStorageAccountSasTokenDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---



