# `hpcCacheBlobTarget` Submodule <a name="`hpcCacheBlobTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheBlobTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheBlobTarget <a name="HpcCacheBlobTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target azurerm_hpc_cache_blob_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

new hpcCacheBlobTarget.HpcCacheBlobTarget(scope: Construct, id: string, config: HpcCacheBlobTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig">HpcCacheBlobTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig">HpcCacheBlobTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetAccessPolicyName">resetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts"></a>

```typescript
public putTimeouts(value: HpcCacheBlobTargetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

---

##### `resetAccessPolicyName` <a name="resetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetAccessPolicyName"></a>

```typescript
public resetAccessPolicyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HpcCacheBlobTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HpcCacheBlobTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HpcCacheBlobTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HpcCacheBlobTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheBlobTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference">HpcCacheBlobTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyNameInput">accessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheNameInput">cacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePathInput">namespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyName">accessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheName">cacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeouts"></a>

```typescript
public readonly timeouts: HpcCacheBlobTargetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference">HpcCacheBlobTargetTimeoutsOutputReference</a>

---

##### `accessPolicyNameInput`<sup>Optional</sup> <a name="accessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyNameInput"></a>

```typescript
public readonly accessPolicyNameInput: string;
```

- *Type:* string

---

##### `cacheNameInput`<sup>Optional</sup> <a name="cacheNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheNameInput"></a>

```typescript
public readonly cacheNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePathInput"></a>

```typescript
public readonly namespacePathInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerIdInput"></a>

```typescript
public readonly storageContainerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | HpcCacheBlobTargetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.accessPolicyName"></a>

```typescript
public readonly accessPolicyName: string;
```

- *Type:* string

---

##### `cacheName`<sup>Required</sup> <a name="cacheName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.cacheName"></a>

```typescript
public readonly cacheName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheBlobTargetConfig <a name="HpcCacheBlobTargetConfig" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.Initializer"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

const hpcCacheBlobTargetConfig: hpcCacheBlobTarget.HpcCacheBlobTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.cacheName">cacheName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#cache_name HpcCacheBlobTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#name HpcCacheBlobTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.namespacePath">namespacePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#namespace_path HpcCacheBlobTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#resource_group_name HpcCacheBlobTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.storageContainerId">storageContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#storage_container_id HpcCacheBlobTarget#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.accessPolicyName">accessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#access_policy_name HpcCacheBlobTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#id HpcCacheBlobTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cacheName`<sup>Required</sup> <a name="cacheName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.cacheName"></a>

```typescript
public readonly cacheName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#cache_name HpcCacheBlobTarget#cache_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#name HpcCacheBlobTarget#name}.

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#namespace_path HpcCacheBlobTarget#namespace_path}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#resource_group_name HpcCacheBlobTarget#resource_group_name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.storageContainerId"></a>

```typescript
public readonly storageContainerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#storage_container_id HpcCacheBlobTarget#storage_container_id}.

---

##### `accessPolicyName`<sup>Optional</sup> <a name="accessPolicyName" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.accessPolicyName"></a>

```typescript
public readonly accessPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#access_policy_name HpcCacheBlobTarget#access_policy_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#id HpcCacheBlobTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: HpcCacheBlobTargetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#timeouts HpcCacheBlobTarget#timeouts}

---

### HpcCacheBlobTargetTimeouts <a name="HpcCacheBlobTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.Initializer"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

const hpcCacheBlobTargetTimeouts: hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#create HpcCacheBlobTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#delete HpcCacheBlobTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#read HpcCacheBlobTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#update HpcCacheBlobTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#create HpcCacheBlobTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#delete HpcCacheBlobTarget#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#read HpcCacheBlobTarget#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/hpc_cache_blob_target#update HpcCacheBlobTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheBlobTargetTimeoutsOutputReference <a name="HpcCacheBlobTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer"></a>

```typescript
import { hpcCacheBlobTarget } from '@cdktf/provider-azurerm'

new hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HpcCacheBlobTargetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.hpcCacheBlobTarget.HpcCacheBlobTargetTimeouts">HpcCacheBlobTargetTimeouts</a>

---



