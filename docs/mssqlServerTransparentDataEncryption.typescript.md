# `mssqlServerTransparentDataEncryption` Submodule <a name="`mssqlServerTransparentDataEncryption` Submodule" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerTransparentDataEncryption <a name="MssqlServerTransparentDataEncryption" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption azurerm_mssql_server_transparent_data_encryption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

new mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption(scope: Construct, id: string, config: MssqlServerTransparentDataEncryptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig">MssqlServerTransparentDataEncryptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig">MssqlServerTransparentDataEncryptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled">resetAutoRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetManagedHsmKeyId">resetManagedHsmKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts"></a>

```typescript
public putTimeouts(value: MssqlServerTransparentDataEncryptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---

##### `resetAutoRotationEnabled` <a name="resetAutoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetAutoRotationEnabled"></a>

```typescript
public resetAutoRotationEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetManagedHsmKeyId` <a name="resetManagedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetManagedHsmKeyId"></a>

```typescript
public resetManagedHsmKeyId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MssqlServerTransparentDataEncryption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlServerTransparentDataEncryption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlServerTransparentDataEncryption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerTransparentDataEncryption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput">autoRotationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyIdInput">managedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlServerTransparentDataEncryptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference">MssqlServerTransparentDataEncryptionTimeoutsOutputReference</a>

---

##### `autoRotationEnabledInput`<sup>Optional</sup> <a name="autoRotationEnabledInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabledInput"></a>

```typescript
public readonly autoRotationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `managedHsmKeyIdInput`<sup>Optional</sup> <a name="managedHsmKeyIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyIdInput"></a>

```typescript
public readonly managedHsmKeyIdInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MssqlServerTransparentDataEncryptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---

##### `autoRotationEnabled`<sup>Required</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.autoRotationEnabled"></a>

```typescript
public readonly autoRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryption.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerTransparentDataEncryptionConfig <a name="MssqlServerTransparentDataEncryptionConfig" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.Initializer"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

const mssqlServerTransparentDataEncryptionConfig: mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled">autoRotationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#managed_hsm_key_id MssqlServerTransparentDataEncryption#managed_hsm_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#server_id MssqlServerTransparentDataEncryption#server_id}.

---

##### `autoRotationEnabled`<sup>Optional</sup> <a name="autoRotationEnabled" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.autoRotationEnabled"></a>

```typescript
public readonly autoRotationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#auto_rotation_enabled MssqlServerTransparentDataEncryption#auto_rotation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#id MssqlServerTransparentDataEncryption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#key_vault_key_id MssqlServerTransparentDataEncryption#key_vault_key_id}.

---

##### `managedHsmKeyId`<sup>Optional</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#managed_hsm_key_id MssqlServerTransparentDataEncryption#managed_hsm_key_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MssqlServerTransparentDataEncryptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#timeouts MssqlServerTransparentDataEncryption#timeouts}

---

### MssqlServerTransparentDataEncryptionTimeouts <a name="MssqlServerTransparentDataEncryptionTimeouts" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.Initializer"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

const mssqlServerTransparentDataEncryptionTimeouts: mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#create MssqlServerTransparentDataEncryption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#delete MssqlServerTransparentDataEncryption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#read MssqlServerTransparentDataEncryption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_server_transparent_data_encryption#update MssqlServerTransparentDataEncryption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerTransparentDataEncryptionTimeoutsOutputReference <a name="MssqlServerTransparentDataEncryptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { mssqlServerTransparentDataEncryption } from '@cdktf/provider-azurerm'

new mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MssqlServerTransparentDataEncryptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mssqlServerTransparentDataEncryption.MssqlServerTransparentDataEncryptionTimeouts">MssqlServerTransparentDataEncryptionTimeouts</a>

---



