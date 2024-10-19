# `kubernetesFleetUpdateRun` Submodule <a name="`kubernetesFleetUpdateRun` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetUpdateRun <a name="KubernetesFleetUpdateRun" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run azurerm_kubernetes_fleet_update_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRun(scope: Construct, id: string, config: KubernetesFleetUpdateRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig">KubernetesFleetUpdateRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate">putManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId">resetFleetUpdateStrategyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagedClusterUpdate` <a name="putManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate"></a>

```typescript
public putManagedClusterUpdate(value: KubernetesFleetUpdateRunManagedClusterUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putManagedClusterUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `putStage` <a name="putStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage"></a>

```typescript
public putStage(value: IResolvable | KubernetesFleetUpdateRunStage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putStage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesFleetUpdateRunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

---

##### `resetFleetUpdateStrategyId` <a name="resetFleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetFleetUpdateStrategyId"></a>

```typescript
public resetFleetUpdateStrategyId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetStage"></a>

```typescript
public resetStage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesFleetUpdateRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFleetUpdateRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFleetUpdateRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetUpdateRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate">managedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput">fleetUpdateStrategyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput">kubernetesFleetManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput">managedClusterUpdateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput">stageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId">fleetUpdateStrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId">kubernetesFleetManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedClusterUpdate`<sup>Required</sup> <a name="managedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdate"></a>

```typescript
public readonly managedClusterUpdate: KubernetesFleetUpdateRunManagedClusterUpdateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateOutputReference</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stage"></a>

```typescript
public readonly stage: KubernetesFleetUpdateRunStageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList">KubernetesFleetUpdateRunStageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetUpdateRunTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference">KubernetesFleetUpdateRunTimeoutsOutputReference</a>

---

##### `fleetUpdateStrategyIdInput`<sup>Optional</sup> <a name="fleetUpdateStrategyIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyIdInput"></a>

```typescript
public readonly fleetUpdateStrategyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesFleetManagerIdInput`<sup>Optional</sup> <a name="kubernetesFleetManagerIdInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerIdInput"></a>

```typescript
public readonly kubernetesFleetManagerIdInput: string;
```

- *Type:* string

---

##### `managedClusterUpdateInput`<sup>Optional</sup> <a name="managedClusterUpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.managedClusterUpdateInput"></a>

```typescript
public readonly managedClusterUpdateInput: KubernetesFleetUpdateRunManagedClusterUpdate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.stageInput"></a>

```typescript
public readonly stageInput: IResolvable | KubernetesFleetUpdateRunStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesFleetUpdateRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

---

##### `fleetUpdateStrategyId`<sup>Required</sup> <a name="fleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.fleetUpdateStrategyId"></a>

```typescript
public readonly fleetUpdateStrategyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesFleetManagerId`<sup>Required</sup> <a name="kubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.kubernetesFleetManagerId"></a>

```typescript
public readonly kubernetesFleetManagerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetUpdateRunConfig <a name="KubernetesFleetUpdateRunConfig" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunConfig: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId">kubernetesFleetManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate">managedClusterUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | managed_cluster_update block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId">fleetUpdateStrategyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage">stage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]</code> | stage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubernetesFleetManagerId`<sup>Required</sup> <a name="kubernetesFleetManagerId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.kubernetesFleetManagerId"></a>

```typescript
public readonly kubernetesFleetManagerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#kubernetes_fleet_manager_id KubernetesFleetUpdateRun#kubernetes_fleet_manager_id}.

---

##### `managedClusterUpdate`<sup>Required</sup> <a name="managedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.managedClusterUpdate"></a>

```typescript
public readonly managedClusterUpdate: KubernetesFleetUpdateRunManagedClusterUpdate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

managed_cluster_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#managed_cluster_update KubernetesFleetUpdateRun#managed_cluster_update}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `fleetUpdateStrategyId`<sup>Optional</sup> <a name="fleetUpdateStrategyId" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.fleetUpdateStrategyId"></a>

```typescript
public readonly fleetUpdateStrategyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#fleet_update_strategy_id KubernetesFleetUpdateRun#fleet_update_strategy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#id KubernetesFleetUpdateRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.stage"></a>

```typescript
public readonly stage: IResolvable | KubernetesFleetUpdateRunStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#stage KubernetesFleetUpdateRun#stage}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetUpdateRunTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#timeouts KubernetesFleetUpdateRun#timeouts}

---

### KubernetesFleetUpdateRunManagedClusterUpdate <a name="KubernetesFleetUpdateRunManagedClusterUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunManagedClusterUpdate: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade">upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | upgrade block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection">nodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | node_image_selection block. |

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.upgrade"></a>

```typescript
public readonly upgrade: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#upgrade KubernetesFleetUpdateRun#upgrade}

---

##### `nodeImageSelection`<sup>Optional</sup> <a name="nodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate.property.nodeImageSelection"></a>

```typescript
public readonly nodeImageSelection: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

node_image_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#node_image_selection KubernetesFleetUpdateRun#node_image_selection}

---

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

### KubernetesFleetUpdateRunManagedClusterUpdateUpgrade <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunManagedClusterUpdateUpgrade: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#type KubernetesFleetUpdateRun#type}.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#kubernetes_version KubernetesFleetUpdateRun#kubernetes_version}.

---

### KubernetesFleetUpdateRunStage <a name="KubernetesFleetUpdateRunStage" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunStage: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group">group</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]</code> | group block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds">afterStageWaitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.group"></a>

```typescript
public readonly group: IResolvable | KubernetesFleetUpdateRunStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#group KubernetesFleetUpdateRun#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

##### `afterStageWaitInSeconds`<sup>Optional</sup> <a name="afterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage.property.afterStageWaitInSeconds"></a>

```typescript
public readonly afterStageWaitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#after_stage_wait_in_seconds KubernetesFleetUpdateRun#after_stage_wait_in_seconds}.

---

### KubernetesFleetUpdateRunStageGroup <a name="KubernetesFleetUpdateRunStageGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunStageGroup: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#name KubernetesFleetUpdateRun#name}.

---

### KubernetesFleetUpdateRunTimeouts <a name="KubernetesFleetUpdateRunTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

const kubernetesFleetUpdateRunTimeouts: kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#create KubernetesFleetUpdateRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#delete KubernetesFleetUpdateRun#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#read KubernetesFleetUpdateRun#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/kubernetes_fleet_update_run#update KubernetesFleetUpdateRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection">putNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade">putUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection">resetNodeImageSelection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeImageSelection` <a name="putNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection"></a>

```typescript
public putNodeImageSelection(value: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putNodeImageSelection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `putUpgrade` <a name="putUpgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade"></a>

```typescript
public putUpgrade(value: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.putUpgrade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `resetNodeImageSelection` <a name="resetNodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.resetNodeImageSelection"></a>

```typescript
public resetNodeImageSelection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection">nodeImageSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade">upgrade</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput">nodeImageSelectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput">upgradeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeImageSelection`<sup>Required</sup> <a name="nodeImageSelection" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelection"></a>

```typescript
public readonly nodeImageSelection: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelectionOutputReference</a>

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgrade"></a>

```typescript
public readonly upgrade: KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference">KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference</a>

---

##### `nodeImageSelectionInput`<sup>Optional</sup> <a name="nodeImageSelectionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.nodeImageSelectionInput"></a>

```typescript
public readonly nodeImageSelectionInput: KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection">KubernetesFleetUpdateRunManagedClusterUpdateNodeImageSelection</a>

---

##### `upgradeInput`<sup>Optional</sup> <a name="upgradeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.upgradeInput"></a>

```typescript
public readonly upgradeInput: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFleetUpdateRunManagedClusterUpdate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdate">KubernetesFleetUpdateRunManagedClusterUpdate</a>

---


### KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference <a name="KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion">resetKubernetesVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKubernetesVersion` <a name="resetKubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.resetKubernetesVersion"></a>

```typescript
public resetKubernetesVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput">kubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kubernetesVersionInput`<sup>Optional</sup> <a name="kubernetesVersionInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersionInput"></a>

```typescript
public readonly kubernetesVersionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgradeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFleetUpdateRunManagedClusterUpdateUpgrade;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunManagedClusterUpdateUpgrade">KubernetesFleetUpdateRunManagedClusterUpdateUpgrade</a>

---


### KubernetesFleetUpdateRunStageGroupList <a name="KubernetesFleetUpdateRunStageGroupList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get"></a>

```typescript
public get(index: number): KubernetesFleetUpdateRunStageGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateRunStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]

---


### KubernetesFleetUpdateRunStageGroupOutputReference <a name="KubernetesFleetUpdateRunStageGroupOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateRunStageGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>

---


### KubernetesFleetUpdateRunStageList <a name="KubernetesFleetUpdateRunStageList" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get"></a>

```typescript
public get(index: number): KubernetesFleetUpdateRunStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateRunStage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>[]

---


### KubernetesFleetUpdateRunStageOutputReference <a name="KubernetesFleetUpdateRunStageOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds">resetAfterStageWaitInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroup` <a name="putGroup" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup"></a>

```typescript
public putGroup(value: IResolvable | KubernetesFleetUpdateRunStageGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.putGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]

---

##### `resetAfterStageWaitInSeconds` <a name="resetAfterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.resetAfterStageWaitInSeconds"></a>

```typescript
public resetAfterStageWaitInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group">group</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput">afterStageWaitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput">groupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds">afterStageWaitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.group"></a>

```typescript
public readonly group: KubernetesFleetUpdateRunStageGroupList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroupList">KubernetesFleetUpdateRunStageGroupList</a>

---

##### `afterStageWaitInSecondsInput`<sup>Optional</sup> <a name="afterStageWaitInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSecondsInput"></a>

```typescript
public readonly afterStageWaitInSecondsInput: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | KubernetesFleetUpdateRunStageGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageGroup">KubernetesFleetUpdateRunStageGroup</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `afterStageWaitInSeconds`<sup>Required</sup> <a name="afterStageWaitInSeconds" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.afterStageWaitInSeconds"></a>

```typescript
public readonly afterStageWaitInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateRunStage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunStage">KubernetesFleetUpdateRunStage</a>

---


### KubernetesFleetUpdateRunTimeoutsOutputReference <a name="KubernetesFleetUpdateRunTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetUpdateRun } from '@cdktf/provider-azurerm'

new kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetUpdateRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetUpdateRun.KubernetesFleetUpdateRunTimeouts">KubernetesFleetUpdateRunTimeouts</a>

---



