# `virtualDesktopApplicationGroup` Submodule <a name="`virtualDesktopApplicationGroup` Submodule" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopApplicationGroup <a name="VirtualDesktopApplicationGroup" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group azurerm_virtual_desktop_application_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

new virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup(scope: Construct, id: string, config: VirtualDesktopApplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig">VirtualDesktopApplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig">VirtualDesktopApplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName">resetDefaultDesktopDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualDesktopApplicationGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

---

##### `resetDefaultDesktopDisplayName` <a name="resetDefaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName"></a>

```typescript
public resetDefaultDesktopDisplayName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopApplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopApplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopApplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput">defaultDesktopDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput">hostPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName">defaultDesktopDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId">hostPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopApplicationGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a>

---

##### `defaultDesktopDisplayNameInput`<sup>Optional</sup> <a name="defaultDesktopDisplayNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput"></a>

```typescript
public readonly defaultDesktopDisplayNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `hostPoolIdInput`<sup>Optional</sup> <a name="hostPoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput"></a>

```typescript
public readonly hostPoolIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualDesktopApplicationGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultDesktopDisplayName`<sup>Required</sup> <a name="defaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName"></a>

```typescript
public readonly defaultDesktopDisplayName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId"></a>

```typescript
public readonly hostPoolId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopApplicationGroupConfig <a name="VirtualDesktopApplicationGroupConfig" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.Initializer"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

const virtualDesktopApplicationGroupConfig: virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId">hostPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName">defaultDesktopDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId"></a>

```typescript
public readonly hostPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}.

---

##### `defaultDesktopDisplayName`<sup>Optional</sup> <a name="defaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName"></a>

```typescript
public readonly defaultDesktopDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}.

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopApplicationGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#timeouts VirtualDesktopApplicationGroup#timeouts}

---

### VirtualDesktopApplicationGroupTimeouts <a name="VirtualDesktopApplicationGroupTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.Initializer"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

const virtualDesktopApplicationGroupTimeouts: virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopApplicationGroupTimeoutsOutputReference <a name="VirtualDesktopApplicationGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualDesktopApplicationGroup } from '@cdktf/provider-azurerm'

new virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualDesktopApplicationGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

---



