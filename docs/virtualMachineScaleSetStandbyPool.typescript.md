# `virtualMachineScaleSetStandbyPool` Submodule <a name="`virtualMachineScaleSetStandbyPool` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetStandbyPool <a name="VirtualMachineScaleSetStandbyPool" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool azurerm_virtual_machine_scale_set_standby_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool(scope: Construct, id: string, config: VirtualMachineScaleSetStandbyPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig">VirtualMachineScaleSetStandbyPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig">VirtualMachineScaleSetStandbyPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile">putElasticityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticityProfile` <a name="putElasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile"></a>

```typescript
public putElasticityProfile(value: VirtualMachineScaleSetStandbyPoolElasticityProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachineScaleSetStandbyPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSetStandbyPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachineScaleSetStandbyPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineScaleSetStandbyPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineScaleSetStandbyPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetStandbyPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfile">elasticityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference">VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference">VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetIdInput">attachedVirtualMachineScaleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfileInput">elasticityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineStateInput">virtualMachineStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetId">attachedVirtualMachineScaleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineState">virtualMachineState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticityProfile`<sup>Required</sup> <a name="elasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfile"></a>

```typescript
public readonly elasticityProfile: VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference">VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference">VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference</a>

---

##### `attachedVirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="attachedVirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetIdInput"></a>

```typescript
public readonly attachedVirtualMachineScaleSetIdInput: string;
```

- *Type:* string

---

##### `elasticityProfileInput`<sup>Optional</sup> <a name="elasticityProfileInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfileInput"></a>

```typescript
public readonly elasticityProfileInput: VirtualMachineScaleSetStandbyPoolElasticityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachineScaleSetStandbyPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---

##### `virtualMachineStateInput`<sup>Optional</sup> <a name="virtualMachineStateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineStateInput"></a>

```typescript
public readonly virtualMachineStateInput: string;
```

- *Type:* string

---

##### `attachedVirtualMachineScaleSetId`<sup>Required</sup> <a name="attachedVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetId"></a>

```typescript
public readonly attachedVirtualMachineScaleSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualMachineState`<sup>Required</sup> <a name="virtualMachineState" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineState"></a>

```typescript
public readonly virtualMachineState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetStandbyPoolConfig <a name="VirtualMachineScaleSetStandbyPoolConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetStandbyPoolConfig: virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.attachedVirtualMachineScaleSetId">attachedVirtualMachineScaleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.elasticityProfile">elasticityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | elasticity_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.virtualMachineState">virtualMachineState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachedVirtualMachineScaleSetId`<sup>Required</sup> <a name="attachedVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.attachedVirtualMachineScaleSetId"></a>

```typescript
public readonly attachedVirtualMachineScaleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}.

---

##### `elasticityProfile`<sup>Required</sup> <a name="elasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.elasticityProfile"></a>

```typescript
public readonly elasticityProfile: VirtualMachineScaleSetStandbyPoolElasticityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

elasticity_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#elasticity_profile VirtualMachineScaleSetStandbyPool#elasticity_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}.

---

##### `virtualMachineState`<sup>Required</sup> <a name="virtualMachineState" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.virtualMachineState"></a>

```typescript
public readonly virtualMachineState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineScaleSetStandbyPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#timeouts VirtualMachineScaleSetStandbyPool#timeouts}

---

### VirtualMachineScaleSetStandbyPoolElasticityProfile <a name="VirtualMachineScaleSetStandbyPoolElasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetStandbyPoolElasticityProfile: virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.maxReadyCapacity">maxReadyCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#max_ready_capacity VirtualMachineScaleSetStandbyPool#max_ready_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.minReadyCapacity">minReadyCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#min_ready_capacity VirtualMachineScaleSetStandbyPool#min_ready_capacity}. |

---

##### `maxReadyCapacity`<sup>Required</sup> <a name="maxReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.maxReadyCapacity"></a>

```typescript
public readonly maxReadyCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#max_ready_capacity VirtualMachineScaleSetStandbyPool#max_ready_capacity}.

---

##### `minReadyCapacity`<sup>Required</sup> <a name="minReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.minReadyCapacity"></a>

```typescript
public readonly minReadyCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#min_ready_capacity VirtualMachineScaleSetStandbyPool#min_ready_capacity}.

---

### VirtualMachineScaleSetStandbyPoolTimeouts <a name="VirtualMachineScaleSetStandbyPoolTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

const virtualMachineScaleSetStandbyPoolTimeouts: virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#create VirtualMachineScaleSetStandbyPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#delete VirtualMachineScaleSetStandbyPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#read VirtualMachineScaleSetStandbyPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#update VirtualMachineScaleSetStandbyPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#create VirtualMachineScaleSetStandbyPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#delete VirtualMachineScaleSetStandbyPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#read VirtualMachineScaleSetStandbyPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#update VirtualMachineScaleSetStandbyPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference <a name="VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacityInput">maxReadyCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacityInput">minReadyCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacity">maxReadyCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacity">minReadyCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReadyCapacityInput`<sup>Optional</sup> <a name="maxReadyCapacityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacityInput"></a>

```typescript
public readonly maxReadyCapacityInput: number;
```

- *Type:* number

---

##### `minReadyCapacityInput`<sup>Optional</sup> <a name="minReadyCapacityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacityInput"></a>

```typescript
public readonly minReadyCapacityInput: number;
```

- *Type:* number

---

##### `maxReadyCapacity`<sup>Required</sup> <a name="maxReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacity"></a>

```typescript
public readonly maxReadyCapacity: number;
```

- *Type:* number

---

##### `minReadyCapacity`<sup>Required</sup> <a name="minReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacity"></a>

```typescript
public readonly minReadyCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineScaleSetStandbyPoolElasticityProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---


### VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference <a name="VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachineScaleSetStandbyPool } from '@cdktf/provider-azurerm'

new virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineScaleSetStandbyPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---



