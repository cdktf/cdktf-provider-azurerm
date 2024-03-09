# `kubernetesFleetUpdateStrategy` Submodule <a name="`kubernetesFleetUpdateStrategy` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateStrategy <a name="KubernetesFleetUpdateStrategy" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy azurerm_kubernetes_fleet_update_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy(scope: Construct, id: string, config: KubernetesFleetUpdateStrategyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig">KubernetesFleetUpdateStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStage` <a name="putStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage"></a>

```typescript
public putStage(value: IResolvable | KubernetesFleetUpdateStrategyStage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putStage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesFleetUpdateStrategyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesFleetUpdateStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFleetUpdateStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFleetUpdateStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput">kubernetesFleetManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput">stageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId">kubernetesFleetManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stage"></a>

```typescript
public readonly stage: KubernetesFleetUpdateStrategyStageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList">KubernetesFleetUpdateStrategyStageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetUpdateStrategyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference">KubernetesFleetUpdateStrategyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="kubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerIdInput"></a>

```typescript
public readonly kubernetesFleetManagerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.stageInput"></a>

```typescript
public readonly stageInput: IResolvable | KubernetesFleetUpdateStrategyStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesFleetUpdateStrategyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesFleetManagerId`<sup>Required</sup> <a name="kubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.kubernetesFleetManagerId"></a>

```typescript
public readonly kubernetesFleetManagerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateStrategyConfig <a name="KubernetesFleetUpdateStrategyConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateStrategyConfig: kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId">kubernetesFleetManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage">stage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubernetesFleetManagerId`<sup>Required</sup> <a name="kubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.kubernetesFleetManagerId"></a>

```typescript
public readonly kubernetesFleetManagerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#kubernetes_fleet_manager_id KubernetesFleetUpdateStrategy#kubernetes_fleet_manager_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.stage"></a>

```typescript
public readonly stage: IResolvable | KubernetesFleetUpdateStrategyStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#stage KubernetesFleetUpdateStrategy#stage}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#id KubernetesFleetUpdateStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetUpdateStrategyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#timeouts KubernetesFleetUpdateStrategy#timeouts}

---

### KubernetesFleetUpdateStrategyStage <a name="KubernetesFleetUpdateStrategyStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateStrategyStage: kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group">group</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds">afterStageWaitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.group"></a>

```typescript
public readonly group: IResolvable | KubernetesFleetUpdateStrategyStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#group KubernetesFleetUpdateStrategy#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

##### `afterStageWaitInSeconds`<sup>Optional</sup> <a name="afterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage.property.afterStageWaitInSeconds"></a>

```typescript
public readonly afterStageWaitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#after_stage_wait_in_seconds KubernetesFleetUpdateStrategy#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateStrategyStageGroup <a name="KubernetesFleetUpdateStrategyStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateStrategyStageGroup: kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#name KubernetesFleetUpdateStrategy#name}.

---

### KubernetesFleetUpdateStrategyTimeouts <a name="KubernetesFleetUpdateStrategyTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateStrategyTimeouts: kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#create KubernetesFleetUpdateStrategy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#delete KubernetesFleetUpdateStrategy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#read KubernetesFleetUpdateStrategy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/kubernetes_fleet_update_strategy#update KubernetesFleetUpdateStrategy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateStrategyStageGroupList <a name="KubernetesFleetUpdateStrategyStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get"></a>

```typescript
public get(index: number): KubernetesFleetUpdateStrategyStageGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateStrategyStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]

---


### KubernetesFleetUpdateStrategyStageGroupOutputReference <a name="KubernetesFleetUpdateStrategyStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateStrategyStageGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>

---


### KubernetesFleetUpdateStrategyStageList <a name="KubernetesFleetUpdateStrategyStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get"></a>

```typescript
public get(index: number): KubernetesFleetUpdateStrategyStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateStrategyStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>[]

---


### KubernetesFleetUpdateStrategyStageOutputReference <a name="KubernetesFleetUpdateStrategyStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds">resetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup"></a>

```typescript
public putGroup(value: IResolvable | KubernetesFleetUpdateStrategyStageGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.putGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]

---

##### `resetAfterStageWaitInSeconds` <a name="resetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.resetAfterStageWaitInSeconds"></a>

```typescript
public resetAfterStageWaitInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group">group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput">afterStageWaitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput">groupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds">afterStageWaitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.group"></a>

```typescript
public readonly group: KubernetesFleetUpdateStrategyStageGroupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroupList">KubernetesFleetUpdateStrategyStageGroupList</a>

---

##### `afterStageWaitInSecondsInput`<sup>Optional</sup> <a name="afterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```typescript
public readonly afterStageWaitInSecondsInput: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | KubernetesFleetUpdateStrategyStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageGroup">KubernetesFleetUpdateStrategyStageGroup</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `afterStageWaitInSeconds`<sup>Required</sup> <a name="afterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.afterStageWaitInSeconds"></a>

```typescript
public readonly afterStageWaitInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateStrategyStage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyStage">KubernetesFleetUpdateStrategyStage</a>

---


### KubernetesFleetUpdateStrategyTimeoutsOutputReference <a name="KubernetesFleetUpdateStrategyTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateStrategy } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateStrategyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateStrategy.KubernetesFleetUpdateStrategyTimeouts">KubernetesFleetUpdateStrategyTimeouts</a>

---



