# `keyVaultKey` Submodule <a name="`keyVaultKey` Submodule" id="@cdktf/provider-azurerm.keyVaultKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultKey <a name="KeyVaultKey" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key azurerm_key_vault_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

new keyVaultKey.KeyVaultKey(scope: Construct, id: string, config: KeyVaultKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig">KeyVaultKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig">KeyVaultKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy">putRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve">resetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate">resetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy">resetRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRotationPolicy` <a name="putRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy"></a>

```typescript
public putRotationPolicy(value: KeyVaultKeyRotationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putRotationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `resetCurve` <a name="resetCurve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetCurve"></a>

```typescript
public resetCurve(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetKeySize"></a>

```typescript
public resetKeySize(): void
```

##### `resetNotBeforeDate` <a name="resetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetNotBeforeDate"></a>

```typescript
public resetNotBeforeDate(): void
```

##### `resetRotationPolicy` <a name="resetRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetRotationPolicy"></a>

```typescript
public resetRotationPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

keyVaultKey.KeyVaultKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

keyVaultKey.KeyVaultKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

keyVaultKey.KeyVaultKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

keyVaultKey.KeyVaultKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem">publicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId">resourceVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy">rotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId">versionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x">x</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y">y</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput">curveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput">keyOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput">keySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput">notBeforeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput">rotationPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve">curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts">keyOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize">keySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyOpenssh"></a>

```typescript
public readonly publicKeyOpenssh: string;
```

- *Type:* string

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.publicKeyPem"></a>

```typescript
public readonly publicKeyPem: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceVersionlessId`<sup>Required</sup> <a name="resourceVersionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.resourceVersionlessId"></a>

```typescript
public readonly resourceVersionlessId: string;
```

- *Type:* string

---

##### `rotationPolicy`<sup>Required</sup> <a name="rotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicy"></a>

```typescript
public readonly rotationPolicy: KeyVaultKeyRotationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference">KeyVaultKeyRotationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference">KeyVaultKeyTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionlessId`<sup>Required</sup> <a name="versionlessId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.versionlessId"></a>

```typescript
public readonly versionlessId: string;
```

- *Type:* string

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.x"></a>

```typescript
public readonly x: string;
```

- *Type:* string

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.y"></a>

```typescript
public readonly y: string;
```

- *Type:* string

---

##### `curveInput`<sup>Optional</sup> <a name="curveInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curveInput"></a>

```typescript
public readonly curveInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyOptsInput`<sup>Optional</sup> <a name="keyOptsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOptsInput"></a>

```typescript
public readonly keyOptsInput: string[];
```

- *Type:* string[]

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySizeInput"></a>

```typescript
public readonly keySizeInput: number;
```

- *Type:* number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notBeforeDateInput`<sup>Optional</sup> <a name="notBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDateInput"></a>

```typescript
public readonly notBeforeDateInput: string;
```

- *Type:* string

---

##### `rotationPolicyInput`<sup>Optional</sup> <a name="rotationPolicyInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.rotationPolicyInput"></a>

```typescript
public readonly rotationPolicyInput: KeyVaultKeyRotationPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---

##### `curve`<sup>Required</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyOpts"></a>

```typescript
public readonly keyOpts: string[];
```

- *Type:* string[]

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultKeyConfig <a name="KeyVaultKeyConfig" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

const keyVaultKeyConfig: keyVaultKey.KeyVaultKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts">keyOpts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#name KeyVaultKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve">curve</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#curve KeyVaultKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#id KeyVaultKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize">keySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy">rotationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | rotation_policy block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#tags KeyVaultKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyOpts`<sup>Required</sup> <a name="keyOpts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyOpts"></a>

```typescript
public readonly keyOpts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#name KeyVaultKey#name}.

---

##### `curve`<sup>Optional</sup> <a name="curve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.curve"></a>

```typescript
public readonly curve: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#curve KeyVaultKey#curve}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#id KeyVaultKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.keySize"></a>

```typescript
public readonly keySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}.

---

##### `notBeforeDate`<sup>Optional</sup> <a name="notBeforeDate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}.

---

##### `rotationPolicy`<sup>Optional</sup> <a name="rotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.rotationPolicy"></a>

```typescript
public readonly rotationPolicy: KeyVaultKeyRotationPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

rotation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#tags KeyVaultKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}

---

### KeyVaultKeyRotationPolicy <a name="KeyVaultKeyRotationPolicy" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

const keyVaultKeyRotationPolicy: keyVaultKey.KeyVaultKeyRotationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | automatic block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter">expireAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry">notifyBeforeExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.automatic"></a>

```typescript
public readonly automatic: KeyVaultKeyRotationPolicyAutomatic;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#automatic KeyVaultKey#automatic}

---

##### `expireAfter`<sup>Optional</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}.

---

##### `notifyBeforeExpiry`<sup>Optional</sup> <a name="notifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy.property.notifyBeforeExpiry"></a>

```typescript
public readonly notifyBeforeExpiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}.

---

### KeyVaultKeyRotationPolicyAutomatic <a name="KeyVaultKeyRotationPolicyAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

const keyVaultKeyRotationPolicyAutomatic: keyVaultKey.KeyVaultKeyRotationPolicyAutomatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation">timeAfterCreation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}. |

---

##### `timeAfterCreation`<sup>Optional</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeAfterCreation"></a>

```typescript
public readonly timeAfterCreation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}.

---

##### `timeBeforeExpiry`<sup>Optional</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic.property.timeBeforeExpiry"></a>

```typescript
public readonly timeBeforeExpiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}.

---

### KeyVaultKeyTimeouts <a name="KeyVaultKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

const keyVaultKeyTimeouts: keyVaultKey.KeyVaultKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#create KeyVaultKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#delete KeyVaultKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#read KeyVaultKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#update KeyVaultKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#create KeyVaultKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#delete KeyVaultKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#read KeyVaultKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/key_vault_key#update KeyVaultKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultKeyRotationPolicyAutomaticOutputReference <a name="KeyVaultKeyRotationPolicyAutomaticOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

new keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation">resetTimeAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry">resetTimeBeforeExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeAfterCreation` <a name="resetTimeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeAfterCreation"></a>

```typescript
public resetTimeAfterCreation(): void
```

##### `resetTimeBeforeExpiry` <a name="resetTimeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.resetTimeBeforeExpiry"></a>

```typescript
public resetTimeBeforeExpiry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput">timeAfterCreationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput">timeBeforeExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation">timeAfterCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry">timeBeforeExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeAfterCreationInput`<sup>Optional</sup> <a name="timeAfterCreationInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreationInput"></a>

```typescript
public readonly timeAfterCreationInput: string;
```

- *Type:* string

---

##### `timeBeforeExpiryInput`<sup>Optional</sup> <a name="timeBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiryInput"></a>

```typescript
public readonly timeBeforeExpiryInput: string;
```

- *Type:* string

---

##### `timeAfterCreation`<sup>Required</sup> <a name="timeAfterCreation" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeAfterCreation"></a>

```typescript
public readonly timeAfterCreation: string;
```

- *Type:* string

---

##### `timeBeforeExpiry`<sup>Required</sup> <a name="timeBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.timeBeforeExpiry"></a>

```typescript
public readonly timeBeforeExpiry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyVaultKeyRotationPolicyAutomatic;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---


### KeyVaultKeyRotationPolicyOutputReference <a name="KeyVaultKeyRotationPolicyOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

new keyVaultKey.KeyVaultKeyRotationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic">putAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter">resetExpireAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry">resetNotifyBeforeExpiry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomatic` <a name="putAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic"></a>

```typescript
public putAutomatic(value: KeyVaultKeyRotationPolicyAutomatic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetExpireAfter` <a name="resetExpireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetExpireAfter"></a>

```typescript
public resetExpireAfter(): void
```

##### `resetNotifyBeforeExpiry` <a name="resetNotifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.resetNotifyBeforeExpiry"></a>

```typescript
public resetNotifyBeforeExpiry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput">automaticInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput">expireAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput">notifyBeforeExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter">expireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry">notifyBeforeExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automatic"></a>

```typescript
public readonly automatic: KeyVaultKeyRotationPolicyAutomaticOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomaticOutputReference">KeyVaultKeyRotationPolicyAutomaticOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.automaticInput"></a>

```typescript
public readonly automaticInput: KeyVaultKeyRotationPolicyAutomatic;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyAutomatic">KeyVaultKeyRotationPolicyAutomatic</a>

---

##### `expireAfterInput`<sup>Optional</sup> <a name="expireAfterInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfterInput"></a>

```typescript
public readonly expireAfterInput: string;
```

- *Type:* string

---

##### `notifyBeforeExpiryInput`<sup>Optional</sup> <a name="notifyBeforeExpiryInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiryInput"></a>

```typescript
public readonly notifyBeforeExpiryInput: string;
```

- *Type:* string

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

---

##### `notifyBeforeExpiry`<sup>Required</sup> <a name="notifyBeforeExpiry" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.notifyBeforeExpiry"></a>

```typescript
public readonly notifyBeforeExpiry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyVaultKeyRotationPolicy;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyRotationPolicy">KeyVaultKeyRotationPolicy</a>

---


### KeyVaultKeyTimeoutsOutputReference <a name="KeyVaultKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultKey } from '@cdktf/provider-azurerm'

new keyVaultKey.KeyVaultKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultKey.KeyVaultKeyTimeouts">KeyVaultKeyTimeouts</a>

---



