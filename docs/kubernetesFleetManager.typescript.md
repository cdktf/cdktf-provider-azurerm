# `kubernetesFleetManager` Submodule <a name="`kubernetesFleetManager` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetManager <a name="KubernetesFleetManager" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager azurerm_kubernetes_fleet_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

new kubernetesFleetManager.KubernetesFleetManager(scope: Construct, id: string, config: KubernetesFleetManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig">KubernetesFleetManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig">KubernetesFleetManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile">putHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetHubProfile">resetHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHubProfile` <a name="putHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile"></a>

```typescript
public putHubProfile(value: KubernetesFleetManagerHubProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesFleetManagerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

---

##### `resetHubProfile` <a name="resetHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetHubProfile"></a>

```typescript
public resetHubProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesFleetManager resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

kubernetesFleetManager.KubernetesFleetManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

kubernetesFleetManager.KubernetesFleetManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

kubernetesFleetManager.KubernetesFleetManager.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesFleetManager resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesFleetManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesFleetManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesFleetManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfile">hubProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference">KubernetesFleetManagerHubProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference">KubernetesFleetManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfileInput">hubProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hubProfile`<sup>Required</sup> <a name="hubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfile"></a>

```typescript
public readonly hubProfile: KubernetesFleetManagerHubProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference">KubernetesFleetManagerHubProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetManagerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference">KubernetesFleetManagerTimeoutsOutputReference</a>

---

##### `hubProfileInput`<sup>Optional</sup> <a name="hubProfileInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfileInput"></a>

```typescript
public readonly hubProfileInput: KubernetesFleetManagerHubProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesFleetManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetManagerConfig <a name="KubernetesFleetManagerConfig" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

const kubernetesFleetManagerConfig: kubernetesFleetManager.KubernetesFleetManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#location KubernetesFleetManager#location}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#name KubernetesFleetManager#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#resource_group_name KubernetesFleetManager#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.hubProfile">hubProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | hub_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#id KubernetesFleetManager#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#tags KubernetesFleetManager#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#location KubernetesFleetManager#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#name KubernetesFleetManager#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#resource_group_name KubernetesFleetManager#resource_group_name}.

---

##### `hubProfile`<sup>Optional</sup> <a name="hubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.hubProfile"></a>

```typescript
public readonly hubProfile: KubernetesFleetManagerHubProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

hub_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#hub_profile KubernetesFleetManager#hub_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#id KubernetesFleetManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#tags KubernetesFleetManager#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesFleetManagerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#timeouts KubernetesFleetManager#timeouts}

---

### KubernetesFleetManagerHubProfile <a name="KubernetesFleetManagerHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

const kubernetesFleetManagerHubProfile: kubernetesFleetManager.KubernetesFleetManagerHubProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.property.dnsPrefix">dnsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#dns_prefix KubernetesFleetManager#dns_prefix}. |

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.property.dnsPrefix"></a>

```typescript
public readonly dnsPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#dns_prefix KubernetesFleetManager#dns_prefix}.

---

### KubernetesFleetManagerTimeouts <a name="KubernetesFleetManagerTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

const kubernetesFleetManagerTimeouts: kubernetesFleetManager.KubernetesFleetManagerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#create KubernetesFleetManager#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#delete KubernetesFleetManager#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#read KubernetesFleetManager#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#update KubernetesFleetManager#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#create KubernetesFleetManager#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#delete KubernetesFleetManager#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#read KubernetesFleetManager#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/kubernetes_fleet_manager#update KubernetesFleetManager#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetManagerHubProfileOutputReference <a name="KubernetesFleetManagerHubProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

new kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefixInput">dnsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefix">dnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `dnsPrefixInput`<sup>Optional</sup> <a name="dnsPrefixInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefixInput"></a>

```typescript
public readonly dnsPrefixInput: string;
```

- *Type:* string

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefix"></a>

```typescript
public readonly dnsPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesFleetManagerHubProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---


### KubernetesFleetManagerTimeoutsOutputReference <a name="KubernetesFleetManagerTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesFleetManager } from '@cdktf/provider-azurerm'

new kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesFleetManagerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

---



