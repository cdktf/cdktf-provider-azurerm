# `virtualDesktopScalingPlanHostPoolAssociation` Submodule <a name="`virtualDesktopScalingPlanHostPoolAssociation` Submodule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopScalingPlanHostPoolAssociation <a name="VirtualDesktopScalingPlanHostPoolAssociation" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association azurerm_virtual_desktop_scaling_plan_host_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

new virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation(scope: Construct, id: string, config: VirtualDesktopScalingPlanHostPoolAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig">VirtualDesktopScalingPlanHostPoolAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig">VirtualDesktopScalingPlanHostPoolAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualDesktopScalingPlanHostPoolAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopScalingPlanHostPoolAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualDesktopScalingPlanHostPoolAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopScalingPlanHostPoolAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopScalingPlanHostPoolAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopScalingPlanHostPoolAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference">VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolIdInput">hostPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanIdInput">scalingPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolId">hostPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanId">scalingPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference">VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostPoolIdInput`<sup>Optional</sup> <a name="hostPoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolIdInput"></a>

```typescript
public readonly hostPoolIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scalingPlanIdInput`<sup>Optional</sup> <a name="scalingPlanIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanIdInput"></a>

```typescript
public readonly scalingPlanIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualDesktopScalingPlanHostPoolAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.hostPoolId"></a>

```typescript
public readonly hostPoolId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scalingPlanId`<sup>Required</sup> <a name="scalingPlanId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.scalingPlanId"></a>

```typescript
public readonly scalingPlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopScalingPlanHostPoolAssociationConfig <a name="VirtualDesktopScalingPlanHostPoolAssociationConfig" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.Initializer"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

const virtualDesktopScalingPlanHostPoolAssociationConfig: virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.hostPoolId">hostPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.scalingPlanId">scalingPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#enabled VirtualDesktopScalingPlanHostPoolAssociation#enabled}.

---

##### `hostPoolId`<sup>Required</sup> <a name="hostPoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.hostPoolId"></a>

```typescript
public readonly hostPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#host_pool_id VirtualDesktopScalingPlanHostPoolAssociation#host_pool_id}.

---

##### `scalingPlanId`<sup>Required</sup> <a name="scalingPlanId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.scalingPlanId"></a>

```typescript
public readonly scalingPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#scaling_plan_id VirtualDesktopScalingPlanHostPoolAssociation#scaling_plan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#id VirtualDesktopScalingPlanHostPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopScalingPlanHostPoolAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#timeouts VirtualDesktopScalingPlanHostPoolAssociation#timeouts}

---

### VirtualDesktopScalingPlanHostPoolAssociationTimeouts <a name="VirtualDesktopScalingPlanHostPoolAssociationTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.Initializer"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

const virtualDesktopScalingPlanHostPoolAssociationTimeouts: virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#create VirtualDesktopScalingPlanHostPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#delete VirtualDesktopScalingPlanHostPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#read VirtualDesktopScalingPlanHostPoolAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#update VirtualDesktopScalingPlanHostPoolAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#create VirtualDesktopScalingPlanHostPoolAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#delete VirtualDesktopScalingPlanHostPoolAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#read VirtualDesktopScalingPlanHostPoolAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/virtual_desktop_scaling_plan_host_pool_association#update VirtualDesktopScalingPlanHostPoolAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference <a name="VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualDesktopScalingPlanHostPoolAssociation } from '@cdktf/provider-azurerm'

new virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualDesktopScalingPlanHostPoolAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlanHostPoolAssociation.VirtualDesktopScalingPlanHostPoolAssociationTimeouts">VirtualDesktopScalingPlanHostPoolAssociationTimeouts</a>

---



