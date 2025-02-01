# `orbitalContactProfile` Submodule <a name="`orbitalContactProfile` Submodule" id="@cdktf/provider-azurerm.orbitalContactProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalContactProfile <a name="OrbitalContactProfile" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile azurerm_orbital_contact_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfile(scope: Construct, id: string, config: OrbitalContactProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig">OrbitalContactProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig">OrbitalContactProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks">putLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri">resetEventHubUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees">resetMinimumElevationDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinks` <a name="putLinks" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks"></a>

```typescript
public putLinks(value: IResolvable | OrbitalContactProfileLinks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: OrbitalContactProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

---

##### `resetEventHubUri` <a name="resetEventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri"></a>

```typescript
public resetEventHubUri(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMinimumElevationDegrees` <a name="resetMinimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees"></a>

```typescript
public resetMinimumElevationDegrees(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrbitalContactProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

orbitalContactProfile.OrbitalContactProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

orbitalContactProfile.OrbitalContactProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

orbitalContactProfile.OrbitalContactProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

orbitalContactProfile.OrbitalContactProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrbitalContactProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrbitalContactProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrbitalContactProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrbitalContactProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links">links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput">autoTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput">eventHubUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput">linksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput">minimumElevationDegreesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput">minimumVariableContactDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput">networkConfigurationSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking">autoTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri">eventHubUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees">minimumElevationDegrees</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration">minimumVariableContactDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId">networkConfigurationSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links"></a>

```typescript
public readonly links: OrbitalContactProfileLinksList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts"></a>

```typescript
public readonly timeouts: OrbitalContactProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a>

---

##### `autoTrackingInput`<sup>Optional</sup> <a name="autoTrackingInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput"></a>

```typescript
public readonly autoTrackingInput: string;
```

- *Type:* string

---

##### `eventHubUriInput`<sup>Optional</sup> <a name="eventHubUriInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput"></a>

```typescript
public readonly eventHubUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linksInput`<sup>Optional</sup> <a name="linksInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput"></a>

```typescript
public readonly linksInput: IResolvable | OrbitalContactProfileLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minimumElevationDegreesInput`<sup>Optional</sup> <a name="minimumElevationDegreesInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput"></a>

```typescript
public readonly minimumElevationDegreesInput: number;
```

- *Type:* number

---

##### `minimumVariableContactDurationInput`<sup>Optional</sup> <a name="minimumVariableContactDurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput"></a>

```typescript
public readonly minimumVariableContactDurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationSubnetIdInput`<sup>Optional</sup> <a name="networkConfigurationSubnetIdInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput"></a>

```typescript
public readonly networkConfigurationSubnetIdInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OrbitalContactProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

---

##### `autoTracking`<sup>Required</sup> <a name="autoTracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking"></a>

```typescript
public readonly autoTracking: string;
```

- *Type:* string

---

##### `eventHubUri`<sup>Required</sup> <a name="eventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri"></a>

```typescript
public readonly eventHubUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumElevationDegrees`<sup>Required</sup> <a name="minimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees"></a>

```typescript
public readonly minimumElevationDegrees: number;
```

- *Type:* number

---

##### `minimumVariableContactDuration`<sup>Required</sup> <a name="minimumVariableContactDuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration"></a>

```typescript
public readonly minimumVariableContactDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfigurationSubnetId`<sup>Required</sup> <a name="networkConfigurationSubnetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId"></a>

```typescript
public readonly networkConfigurationSubnetId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalContactProfileConfig <a name="OrbitalContactProfileConfig" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

const orbitalContactProfileConfig: orbitalContactProfile.OrbitalContactProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking">autoTracking</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links">links</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration">minimumVariableContactDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId">networkConfigurationSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri">eventHubUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees">minimumElevationDegrees</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoTracking`<sup>Required</sup> <a name="autoTracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking"></a>

```typescript
public readonly autoTracking: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}.

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links"></a>

```typescript
public readonly links: IResolvable | OrbitalContactProfileLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#links OrbitalContactProfile#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}.

---

##### `minimumVariableContactDuration`<sup>Required</sup> <a name="minimumVariableContactDuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration"></a>

```typescript
public readonly minimumVariableContactDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `networkConfigurationSubnetId`<sup>Required</sup> <a name="networkConfigurationSubnetId" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId"></a>

```typescript
public readonly networkConfigurationSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}.

---

##### `eventHubUri`<sup>Optional</sup> <a name="eventHubUri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri"></a>

```typescript
public readonly eventHubUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumElevationDegrees`<sup>Optional</sup> <a name="minimumElevationDegrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees"></a>

```typescript
public readonly minimumElevationDegrees: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OrbitalContactProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#timeouts OrbitalContactProfile#timeouts}

---

### OrbitalContactProfileLinks <a name="OrbitalContactProfileLinks" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

const orbitalContactProfileLinks: orbitalContactProfile.OrbitalContactProfileLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels">channels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]</code> | channels block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization">polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}. |

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels"></a>

```typescript
public readonly channels: IResolvable | OrbitalContactProfileLinksChannels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]

channels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#channels OrbitalContactProfile#channels}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}.

---

### OrbitalContactProfileLinksChannels <a name="OrbitalContactProfileLinksChannels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

const orbitalContactProfileLinksChannels: orbitalContactProfile.OrbitalContactProfileLinksChannels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz">bandwidthMhz</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz">centerFrequencyMhz</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint">endPoint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]</code> | end_point block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration">demodulationConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration">modulationConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}. |

---

##### `bandwidthMhz`<sup>Required</sup> <a name="bandwidthMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz"></a>

```typescript
public readonly bandwidthMhz: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}.

---

##### `centerFrequencyMhz`<sup>Required</sup> <a name="centerFrequencyMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz"></a>

```typescript
public readonly centerFrequencyMhz: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}.

---

##### `endPoint`<sup>Required</sup> <a name="endPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint"></a>

```typescript
public readonly endPoint: IResolvable | OrbitalContactProfileLinksChannelsEndPoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]

end_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#end_point OrbitalContactProfile#end_point}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `demodulationConfiguration`<sup>Optional</sup> <a name="demodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration"></a>

```typescript
public readonly demodulationConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}.

---

##### `modulationConfiguration`<sup>Optional</sup> <a name="modulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration"></a>

```typescript
public readonly modulationConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}.

---

### OrbitalContactProfileLinksChannelsEndPoint <a name="OrbitalContactProfileLinksChannelsEndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

const orbitalContactProfileLinksChannelsEndPoint: orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName">endPointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}. |

---

##### `endPointName`<sup>Required</sup> <a name="endPointName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName"></a>

```typescript
public readonly endPointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}.

---

### OrbitalContactProfileTimeouts <a name="OrbitalContactProfileTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

const orbitalContactProfileTimeouts: orbitalContactProfile.OrbitalContactProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalContactProfileLinksChannelsEndPointList <a name="OrbitalContactProfileLinksChannelsEndPointList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get"></a>

```typescript
public get(index: number): OrbitalContactProfileLinksChannelsEndPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinksChannelsEndPoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]

---


### OrbitalContactProfileLinksChannelsEndPointOutputReference <a name="OrbitalContactProfileLinksChannelsEndPointOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput">endPointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName">endPointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPointNameInput`<sup>Optional</sup> <a name="endPointNameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput"></a>

```typescript
public readonly endPointNameInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `endPointName`<sup>Required</sup> <a name="endPointName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName"></a>

```typescript
public readonly endPointName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinksChannelsEndPoint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>

---


### OrbitalContactProfileLinksChannelsList <a name="OrbitalContactProfileLinksChannelsList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get"></a>

```typescript
public get(index: number): OrbitalContactProfileLinksChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinksChannels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]

---


### OrbitalContactProfileLinksChannelsOutputReference <a name="OrbitalContactProfileLinksChannelsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint">putEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration">resetDemodulationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration">resetModulationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndPoint` <a name="putEndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint"></a>

```typescript
public putEndPoint(value: IResolvable | OrbitalContactProfileLinksChannelsEndPoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]

---

##### `resetDemodulationConfiguration` <a name="resetDemodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration"></a>

```typescript
public resetDemodulationConfiguration(): void
```

##### `resetModulationConfiguration` <a name="resetModulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration"></a>

```typescript
public resetModulationConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint">endPoint</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput">bandwidthMhzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput">centerFrequencyMhzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput">demodulationConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput">endPointInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput">modulationConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz">bandwidthMhz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz">centerFrequencyMhz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration">demodulationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration">modulationConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPoint`<sup>Required</sup> <a name="endPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint"></a>

```typescript
public readonly endPoint: OrbitalContactProfileLinksChannelsEndPointList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a>

---

##### `bandwidthMhzInput`<sup>Optional</sup> <a name="bandwidthMhzInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput"></a>

```typescript
public readonly bandwidthMhzInput: number;
```

- *Type:* number

---

##### `centerFrequencyMhzInput`<sup>Optional</sup> <a name="centerFrequencyMhzInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput"></a>

```typescript
public readonly centerFrequencyMhzInput: number;
```

- *Type:* number

---

##### `demodulationConfigurationInput`<sup>Optional</sup> <a name="demodulationConfigurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput"></a>

```typescript
public readonly demodulationConfigurationInput: string;
```

- *Type:* string

---

##### `endPointInput`<sup>Optional</sup> <a name="endPointInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput"></a>

```typescript
public readonly endPointInput: IResolvable | OrbitalContactProfileLinksChannelsEndPoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>[]

---

##### `modulationConfigurationInput`<sup>Optional</sup> <a name="modulationConfigurationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput"></a>

```typescript
public readonly modulationConfigurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `bandwidthMhz`<sup>Required</sup> <a name="bandwidthMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz"></a>

```typescript
public readonly bandwidthMhz: number;
```

- *Type:* number

---

##### `centerFrequencyMhz`<sup>Required</sup> <a name="centerFrequencyMhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz"></a>

```typescript
public readonly centerFrequencyMhz: number;
```

- *Type:* number

---

##### `demodulationConfiguration`<sup>Required</sup> <a name="demodulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration"></a>

```typescript
public readonly demodulationConfiguration: string;
```

- *Type:* string

---

##### `modulationConfiguration`<sup>Required</sup> <a name="modulationConfiguration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration"></a>

```typescript
public readonly modulationConfiguration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinksChannels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>

---


### OrbitalContactProfileLinksList <a name="OrbitalContactProfileLinksList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get"></a>

```typescript
public get(index: number): OrbitalContactProfileLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>[]

---


### OrbitalContactProfileLinksOutputReference <a name="OrbitalContactProfileLinksOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileLinksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels">putChannels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChannels` <a name="putChannels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels"></a>

```typescript
public putChannels(value: IResolvable | OrbitalContactProfileLinksChannels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels">channels</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput">channelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization">polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels"></a>

```typescript
public readonly channels: OrbitalContactProfileLinksChannelsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a>

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput"></a>

```typescript
public readonly channelsInput: IResolvable | OrbitalContactProfileLinksChannels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput"></a>

```typescript
public readonly polarizationInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization"></a>

```typescript
public readonly polarization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileLinks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>

---


### OrbitalContactProfileTimeoutsOutputReference <a name="OrbitalContactProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { orbitalContactProfile } from '@cdktf/provider-azurerm'

new orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrbitalContactProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

---



