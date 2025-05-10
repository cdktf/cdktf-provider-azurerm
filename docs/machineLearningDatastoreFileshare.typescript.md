# `machineLearningDatastoreFileshare` Submodule <a name="`machineLearningDatastoreFileshare` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreFileshare <a name="MachineLearningDatastoreFileshare" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare azurerm_machine_learning_datastore_fileshare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

new machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare(scope: Construct, id: string, config: MachineLearningDatastoreFileshareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig">MachineLearningDatastoreFileshareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig">MachineLearningDatastoreFileshareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetServiceDataIdentity">resetServiceDataIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetSharedAccessSignature">resetSharedAccessSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningDatastoreFileshareTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServiceDataIdentity` <a name="resetServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetServiceDataIdentity"></a>

```typescript
public resetServiceDataIdentity(): void
```

##### `resetSharedAccessSignature` <a name="resetSharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetSharedAccessSignature"></a>

```typescript
public resetSharedAccessSignature(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningDatastoreFileshare resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MachineLearningDatastoreFileshare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningDatastoreFileshare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningDatastoreFileshare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningDatastoreFileshare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference">MachineLearningDatastoreFileshareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentityInput">serviceDataIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignatureInput">sharedAccessSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareIdInput">storageFileshareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentity">serviceDataIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareId">storageFileshareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningDatastoreFileshareTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference">MachineLearningDatastoreFileshareTimeoutsOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceDataIdentityInput`<sup>Optional</sup> <a name="serviceDataIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentityInput"></a>

```typescript
public readonly serviceDataIdentityInput: string;
```

- *Type:* string

---

##### `sharedAccessSignatureInput`<sup>Optional</sup> <a name="sharedAccessSignatureInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignatureInput"></a>

```typescript
public readonly sharedAccessSignatureInput: string;
```

- *Type:* string

---

##### `storageFileshareIdInput`<sup>Optional</sup> <a name="storageFileshareIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareIdInput"></a>

```typescript
public readonly storageFileshareIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningDatastoreFileshareTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceDataIdentity`<sup>Required</sup> <a name="serviceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentity"></a>

```typescript
public readonly serviceDataIdentity: string;
```

- *Type:* string

---

##### `sharedAccessSignature`<sup>Required</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignature"></a>

```typescript
public readonly sharedAccessSignature: string;
```

- *Type:* string

---

##### `storageFileshareId`<sup>Required</sup> <a name="storageFileshareId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareId"></a>

```typescript
public readonly storageFileshareId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreFileshareConfig <a name="MachineLearningDatastoreFileshareConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.Initializer"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

const machineLearningDatastoreFileshareConfig: machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#name MachineLearningDatastoreFileshare#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.storageFileshareId">storageFileshareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#storage_fileshare_id MachineLearningDatastoreFileshare#storage_fileshare_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#workspace_id MachineLearningDatastoreFileshare#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#account_key MachineLearningDatastoreFileshare#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#description MachineLearningDatastoreFileshare#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#id MachineLearningDatastoreFileshare#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.serviceDataIdentity">serviceDataIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#service_data_identity MachineLearningDatastoreFileshare#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#shared_access_signature MachineLearningDatastoreFileshare#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#tags MachineLearningDatastoreFileshare#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#name MachineLearningDatastoreFileshare#name}.

---

##### `storageFileshareId`<sup>Required</sup> <a name="storageFileshareId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.storageFileshareId"></a>

```typescript
public readonly storageFileshareId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#storage_fileshare_id MachineLearningDatastoreFileshare#storage_fileshare_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#workspace_id MachineLearningDatastoreFileshare#workspace_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#account_key MachineLearningDatastoreFileshare#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#description MachineLearningDatastoreFileshare#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#id MachineLearningDatastoreFileshare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceDataIdentity`<sup>Optional</sup> <a name="serviceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.serviceDataIdentity"></a>

```typescript
public readonly serviceDataIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#service_data_identity MachineLearningDatastoreFileshare#service_data_identity}.

---

##### `sharedAccessSignature`<sup>Optional</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.sharedAccessSignature"></a>

```typescript
public readonly sharedAccessSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#shared_access_signature MachineLearningDatastoreFileshare#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#tags MachineLearningDatastoreFileshare#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningDatastoreFileshareTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#timeouts MachineLearningDatastoreFileshare#timeouts}

---

### MachineLearningDatastoreFileshareTimeouts <a name="MachineLearningDatastoreFileshareTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.Initializer"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

const machineLearningDatastoreFileshareTimeouts: machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#create MachineLearningDatastoreFileshare#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#delete MachineLearningDatastoreFileshare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#read MachineLearningDatastoreFileshare#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#update MachineLearningDatastoreFileshare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#create MachineLearningDatastoreFileshare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#delete MachineLearningDatastoreFileshare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#read MachineLearningDatastoreFileshare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/machine_learning_datastore_fileshare#update MachineLearningDatastoreFileshare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreFileshareTimeoutsOutputReference <a name="MachineLearningDatastoreFileshareTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningDatastoreFileshare } from '@cdktf/provider-azurerm'

new machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningDatastoreFileshareTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

---



