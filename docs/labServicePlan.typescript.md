# `labServicePlan` Submodule <a name="`labServicePlan` Submodule" id="@cdktf/provider-azurerm.labServicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServicePlan <a name="LabServicePlan" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan azurerm_lab_service_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

new labServicePlan.LabServicePlan(scope: Construct, id: string, config: LabServicePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown">putDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection">putDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport">putSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown">resetDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection">resetDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId">resetDefaultNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId">resetSharedGalleryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport">resetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultAutoShutdown` <a name="putDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown"></a>

```typescript
public putDefaultAutoShutdown(value: LabServicePlanDefaultAutoShutdown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `putDefaultConnection` <a name="putDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection"></a>

```typescript
public putDefaultConnection(value: LabServicePlanDefaultConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `putSupport` <a name="putSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport"></a>

```typescript
public putSupport(value: LabServicePlanSupport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts"></a>

```typescript
public putTimeouts(value: LabServicePlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `resetDefaultAutoShutdown` <a name="resetDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown"></a>

```typescript
public resetDefaultAutoShutdown(): void
```

##### `resetDefaultConnection` <a name="resetDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection"></a>

```typescript
public resetDefaultConnection(): void
```

##### `resetDefaultNetworkSubnetId` <a name="resetDefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId"></a>

```typescript
public resetDefaultNetworkSubnetId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSharedGalleryId` <a name="resetSharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId"></a>

```typescript
public resetSharedGalleryId(): void
```

##### `resetSupport` <a name="resetSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport"></a>

```typescript
public resetSupport(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

labServicePlan.LabServicePlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

labServicePlan.LabServicePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

labServicePlan.LabServicePlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

labServicePlan.LabServicePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LabServicePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LabServicePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LabServicePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LabServicePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown">defaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection">defaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput">allowedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput">defaultAutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput">defaultConnectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput">defaultNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput">sharedGalleryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput">supportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions">allowedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId">defaultNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId">sharedGalleryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAutoShutdown`<sup>Required</sup> <a name="defaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown"></a>

```typescript
public readonly defaultAutoShutdown: LabServicePlanDefaultAutoShutdownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a>

---

##### `defaultConnection`<sup>Required</sup> <a name="defaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection"></a>

```typescript
public readonly defaultConnection: LabServicePlanDefaultConnectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a>

---

##### `support`<sup>Required</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support"></a>

```typescript
public readonly support: LabServicePlanSupportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts"></a>

```typescript
public readonly timeouts: LabServicePlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a>

---

##### `allowedRegionsInput`<sup>Optional</sup> <a name="allowedRegionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput"></a>

```typescript
public readonly allowedRegionsInput: string[];
```

- *Type:* string[]

---

##### `defaultAutoShutdownInput`<sup>Optional</sup> <a name="defaultAutoShutdownInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput"></a>

```typescript
public readonly defaultAutoShutdownInput: LabServicePlanDefaultAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `defaultConnectionInput`<sup>Optional</sup> <a name="defaultConnectionInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput"></a>

```typescript
public readonly defaultConnectionInput: LabServicePlanDefaultConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `defaultNetworkSubnetIdInput`<sup>Optional</sup> <a name="defaultNetworkSubnetIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput"></a>

```typescript
public readonly defaultNetworkSubnetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `sharedGalleryIdInput`<sup>Optional</sup> <a name="sharedGalleryIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput"></a>

```typescript
public readonly sharedGalleryIdInput: string;
```

- *Type:* string

---

##### `supportInput`<sup>Optional</sup> <a name="supportInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput"></a>

```typescript
public readonly supportInput: LabServicePlanSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LabServicePlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions"></a>

```typescript
public readonly allowedRegions: string[];
```

- *Type:* string[]

---

##### `defaultNetworkSubnetId`<sup>Required</sup> <a name="defaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId"></a>

```typescript
public readonly defaultNetworkSubnetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sharedGalleryId`<sup>Required</sup> <a name="sharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId"></a>

```typescript
public readonly sharedGalleryId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServicePlanConfig <a name="LabServicePlanConfig" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

const labServicePlanConfig: labServicePlan.LabServicePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions">allowedRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown">defaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection">defaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId">defaultNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId">sharedGalleryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support">support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedRegions`<sup>Required</sup> <a name="allowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions"></a>

```typescript
public readonly allowedRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `defaultAutoShutdown`<sup>Optional</sup> <a name="defaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown"></a>

```typescript
public readonly defaultAutoShutdown: LabServicePlanDefaultAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `defaultConnection`<sup>Optional</sup> <a name="defaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection"></a>

```typescript
public readonly defaultConnection: LabServicePlanDefaultConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `defaultNetworkSubnetId`<sup>Optional</sup> <a name="defaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId"></a>

```typescript
public readonly defaultNetworkSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharedGalleryId`<sup>Optional</sup> <a name="sharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId"></a>

```typescript
public readonly sharedGalleryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support"></a>

```typescript
public readonly support: LabServicePlanSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LabServicePlanTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

### LabServicePlanDefaultAutoShutdown <a name="LabServicePlanDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

const labServicePlanDefaultAutoShutdown: labServicePlan.LabServicePlanDefaultAutoShutdown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay">disconnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay">idleDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay">noConnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}. |

---

##### `disconnectDelay`<sup>Optional</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay"></a>

```typescript
public readonly disconnectDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

##### `idleDelay`<sup>Optional</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay"></a>

```typescript
public readonly idleDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

##### `noConnectDelay`<sup>Optional</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay"></a>

```typescript
public readonly noConnectDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

##### `shutdownOnIdle`<sup>Optional</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle"></a>

```typescript
public readonly shutdownOnIdle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

### LabServicePlanDefaultConnection <a name="LabServicePlanDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

const labServicePlanDefaultConnection: labServicePlan.LabServicePlanDefaultConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess">clientRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess">clientSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess">webRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess">webSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}. |

---

##### `clientRdpAccess`<sup>Optional</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess"></a>

```typescript
public readonly clientRdpAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

##### `clientSshAccess`<sup>Optional</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess"></a>

```typescript
public readonly clientSshAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

##### `webRdpAccess`<sup>Optional</sup> <a name="webRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess"></a>

```typescript
public readonly webRdpAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

##### `webSshAccess`<sup>Optional</sup> <a name="webSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess"></a>

```typescript
public readonly webSshAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

### LabServicePlanSupport <a name="LabServicePlanSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

const labServicePlanSupport: labServicePlan.LabServicePlanSupport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#email LabServicePlan#email}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions">instructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone">phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#url LabServicePlan#url}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

### LabServicePlanTimeouts <a name="LabServicePlanTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

const labServicePlanTimeouts: labServicePlan.LabServicePlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#create LabServicePlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#read LabServicePlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#update LabServicePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServicePlanDefaultAutoShutdownOutputReference <a name="LabServicePlanDefaultAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

new labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay">resetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay">resetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay">resetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle">resetShutdownOnIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectDelay` <a name="resetDisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay"></a>

```typescript
public resetDisconnectDelay(): void
```

##### `resetIdleDelay` <a name="resetIdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay"></a>

```typescript
public resetIdleDelay(): void
```

##### `resetNoConnectDelay` <a name="resetNoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay"></a>

```typescript
public resetNoConnectDelay(): void
```

##### `resetShutdownOnIdle` <a name="resetShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```typescript
public resetShutdownOnIdle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput">disconnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput">idleDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput">noConnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdownOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay">disconnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay">idleDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay">noConnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnectDelayInput`<sup>Optional</sup> <a name="disconnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```typescript
public readonly disconnectDelayInput: string;
```

- *Type:* string

---

##### `idleDelayInput`<sup>Optional</sup> <a name="idleDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput"></a>

```typescript
public readonly idleDelayInput: string;
```

- *Type:* string

---

##### `noConnectDelayInput`<sup>Optional</sup> <a name="noConnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```typescript
public readonly noConnectDelayInput: string;
```

- *Type:* string

---

##### `shutdownOnIdleInput`<sup>Optional</sup> <a name="shutdownOnIdleInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```typescript
public readonly shutdownOnIdleInput: string;
```

- *Type:* string

---

##### `disconnectDelay`<sup>Required</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay"></a>

```typescript
public readonly disconnectDelay: string;
```

- *Type:* string

---

##### `idleDelay`<sup>Required</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay"></a>

```typescript
public readonly idleDelay: string;
```

- *Type:* string

---

##### `noConnectDelay`<sup>Required</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay"></a>

```typescript
public readonly noConnectDelay: string;
```

- *Type:* string

---

##### `shutdownOnIdle`<sup>Required</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```typescript
public readonly shutdownOnIdle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServicePlanDefaultAutoShutdown;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---


### LabServicePlanDefaultConnectionOutputReference <a name="LabServicePlanDefaultConnectionOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

new labServicePlan.LabServicePlanDefaultConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess">resetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess">resetClientSshAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess">resetWebRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess">resetWebSshAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientRdpAccess` <a name="resetClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess"></a>

```typescript
public resetClientRdpAccess(): void
```

##### `resetClientSshAccess` <a name="resetClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess"></a>

```typescript
public resetClientSshAccess(): void
```

##### `resetWebRdpAccess` <a name="resetWebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess"></a>

```typescript
public resetWebRdpAccess(): void
```

##### `resetWebSshAccess` <a name="resetWebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess"></a>

```typescript
public resetWebSshAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput">clientRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput">clientSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput">webRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput">webSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess">clientRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess">clientSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess">webRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess">webSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientRdpAccessInput`<sup>Optional</sup> <a name="clientRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput"></a>

```typescript
public readonly clientRdpAccessInput: string;
```

- *Type:* string

---

##### `clientSshAccessInput`<sup>Optional</sup> <a name="clientSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput"></a>

```typescript
public readonly clientSshAccessInput: string;
```

- *Type:* string

---

##### `webRdpAccessInput`<sup>Optional</sup> <a name="webRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput"></a>

```typescript
public readonly webRdpAccessInput: string;
```

- *Type:* string

---

##### `webSshAccessInput`<sup>Optional</sup> <a name="webSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput"></a>

```typescript
public readonly webSshAccessInput: string;
```

- *Type:* string

---

##### `clientRdpAccess`<sup>Required</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess"></a>

```typescript
public readonly clientRdpAccess: string;
```

- *Type:* string

---

##### `clientSshAccess`<sup>Required</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess"></a>

```typescript
public readonly clientSshAccess: string;
```

- *Type:* string

---

##### `webRdpAccess`<sup>Required</sup> <a name="webRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess"></a>

```typescript
public readonly webRdpAccess: string;
```

- *Type:* string

---

##### `webSshAccess`<sup>Required</sup> <a name="webSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess"></a>

```typescript
public readonly webSshAccess: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServicePlanDefaultConnection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---


### LabServicePlanSupportOutputReference <a name="LabServicePlanSupportOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

new labServicePlan.LabServicePlanSupportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone">resetPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetInstructions` <a name="resetInstructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```

##### `resetPhone` <a name="resetPhone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone"></a>

```typescript
public resetPhone(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput">phoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: string;
```

- *Type:* string

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput"></a>

```typescript
public readonly phoneInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LabServicePlanSupport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---


### LabServicePlanTimeoutsOutputReference <a name="LabServicePlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { labServicePlan } from '@cdktf/provider-azurerm'

new labServicePlan.LabServicePlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LabServicePlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---



