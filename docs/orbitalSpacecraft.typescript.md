# `orbitalSpacecraft` Submodule <a name="`orbitalSpacecraft` Submodule" id="@cdktf/provider-azurerm.orbitalSpacecraft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalSpacecraft <a name="OrbitalSpacecraft" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

new orbitalSpacecraft.OrbitalSpacecraft(scope: Construct, id: string, config: OrbitalSpacecraftConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinks` <a name="putLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks"></a>

```typescript
public putLinks(value: IResolvable | OrbitalSpacecraftLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts"></a>

```typescript
public putTimeouts(value: OrbitalSpacecraftTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

orbitalSpacecraft.OrbitalSpacecraft.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrbitalSpacecraft to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrbitalSpacecraft that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrbitalSpacecraft to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links">links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput">linksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput">noradIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput">titleLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput">twoLineElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId">noradId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine">titleLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements">twoLineElements</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links"></a>

```typescript
public readonly links: OrbitalSpacecraftLinksList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts"></a>

```typescript
public readonly timeouts: OrbitalSpacecraftTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput"></a>

```typescript
public readonly linksInput: IResolvable | OrbitalSpacecraftLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noradIdInput`<sup>Optional</sup> <a name="noradIdInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput"></a>

```typescript
public readonly noradIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrbitalSpacecraftTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

---

##### `titleLineInput`<sup>Optional</sup> <a name="titleLineInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput"></a>

```typescript
public readonly titleLineInput: string;
```

- *Type:* string

---

##### `twoLineElementsInput`<sup>Optional</sup> <a name="twoLineElementsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput"></a>

```typescript
public readonly twoLineElementsInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `noradId`<sup>Required</sup> <a name="noradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId"></a>

```typescript
public readonly noradId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `titleLine`<sup>Required</sup> <a name="titleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine"></a>

```typescript
public readonly titleLine: string;
```

- *Type:* string

---

##### `twoLineElements`<sup>Required</sup> <a name="twoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements"></a>

```typescript
public readonly twoLineElements: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalSpacecraftConfig <a name="OrbitalSpacecraftConfig" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

const orbitalSpacecraftConfig: orbitalSpacecraft.OrbitalSpacecraftConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links">links</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId">noradId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine">titleLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements">twoLineElements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links"></a>

```typescript
public readonly links: IResolvable | OrbitalSpacecraftLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `noradId`<sup>Required</sup> <a name="noradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId"></a>

```typescript
public readonly noradId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}.

---

##### `titleLine`<sup>Required</sup> <a name="titleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine"></a>

```typescript
public readonly titleLine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}.

---

##### `twoLineElements`<sup>Required</sup> <a name="twoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements"></a>

```typescript
public readonly twoLineElements: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OrbitalSpacecraftTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}

---

### OrbitalSpacecraftLinks <a name="OrbitalSpacecraftLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

const orbitalSpacecraftLinks: orbitalSpacecraft.OrbitalSpacecraftLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz">bandwidthMhz</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz">centerFrequencyMhz</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization">polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}. |

---

##### `bandwidthMhz`<sup>Required</sup> <a name="bandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz"></a>

```typescript
public readonly bandwidthMhz: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}.

---

##### `centerFrequencyMhz`<sup>Required</sup> <a name="centerFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz"></a>

```typescript
public readonly centerFrequencyMhz: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}.

---

### OrbitalSpacecraftTimeouts <a name="OrbitalSpacecraftTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

const orbitalSpacecraftTimeouts: orbitalSpacecraft.OrbitalSpacecraftTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalSpacecraftLinksList <a name="OrbitalSpacecraftLinksList" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

new orbitalSpacecraft.OrbitalSpacecraftLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get"></a>

```typescript
public get(index: number): OrbitalSpacecraftLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalSpacecraftLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>[]

---


### OrbitalSpacecraftLinksOutputReference <a name="OrbitalSpacecraftLinksOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

new orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput">bandwidthMhzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput">centerFrequencyMhzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz">bandwidthMhz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz">centerFrequencyMhz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization">polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthMhzInput`<sup>Optional</sup> <a name="bandwidthMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput"></a>

```typescript
public readonly bandwidthMhzInput: number;
```

- *Type:* number

---

##### `centerFrequencyMhzInput`<sup>Optional</sup> <a name="centerFrequencyMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput"></a>

```typescript
public readonly centerFrequencyMhzInput: number;
```

- *Type:* number

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput"></a>

```typescript
public readonly polarizationInput: string;
```

- *Type:* string

---

##### `bandwidthMhz`<sup>Required</sup> <a name="bandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz"></a>

```typescript
public readonly bandwidthMhz: number;
```

- *Type:* number

---

##### `centerFrequencyMhz`<sup>Required</sup> <a name="centerFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz"></a>

```typescript
public readonly centerFrequencyMhz: number;
```

- *Type:* number

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalSpacecraftLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>

---


### OrbitalSpacecraftTimeoutsOutputReference <a name="OrbitalSpacecraftTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer"></a>

```typescript
import { orbitalSpacecraft } from '@cdktf/provider-azurerm'

new orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalSpacecraftTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

---



