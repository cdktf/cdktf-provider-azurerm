# `virtualDesktopHostPoolRegistrationInfo` Submodule <a name="`virtualDesktopHostPoolRegistrationInfo` Submodule" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopHostPoolRegistrationInfo <a name="VirtualDesktopHostPoolRegistrationInfo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info azurerm_virtual_desktop_host_pool_registration_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

new virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo(scope: Construct, id: string, config: VirtualDesktopHostPoolRegistrationInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig">VirtualDesktopHostPoolRegistrationInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualDesktopHostPoolRegistrationInfoTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualDesktopHostPoolRegistrationInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualDesktopHostPoolRegistrationInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualDesktopHostPoolRegistrationInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopHostPoolRegistrationInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput">hostpoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId">hostpoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference">VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `hostpoolIdInput`<sup>Optional</sup> <a name="hostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolIdInput"></a>

```typescript
public readonly hostpoolIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualDesktopHostPoolRegistrationInfoTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `hostpoolId`<sup>Required</sup> <a name="hostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.hostpoolId"></a>

```typescript
public readonly hostpoolId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopHostPoolRegistrationInfoConfig <a name="VirtualDesktopHostPoolRegistrationInfoConfig" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.Initializer"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

const virtualDesktopHostPoolRegistrationInfoConfig: virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId">hostpoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#expiration_date VirtualDesktopHostPoolRegistrationInfo#expiration_date}.

---

##### `hostpoolId`<sup>Required</sup> <a name="hostpoolId" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.hostpoolId"></a>

```typescript
public readonly hostpoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#hostpool_id VirtualDesktopHostPoolRegistrationInfo#hostpool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#id VirtualDesktopHostPoolRegistrationInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualDesktopHostPoolRegistrationInfoTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#timeouts VirtualDesktopHostPoolRegistrationInfo#timeouts}

---

### VirtualDesktopHostPoolRegistrationInfoTimeouts <a name="VirtualDesktopHostPoolRegistrationInfoTimeouts" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.Initializer"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

const virtualDesktopHostPoolRegistrationInfoTimeouts: virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#create VirtualDesktopHostPoolRegistrationInfo#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#delete VirtualDesktopHostPoolRegistrationInfo#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#read VirtualDesktopHostPoolRegistrationInfo#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/virtual_desktop_host_pool_registration_info#update VirtualDesktopHostPoolRegistrationInfo#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference <a name="VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualDesktopHostPoolRegistrationInfo } from '@cdktf/provider-azurerm'

new virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualDesktopHostPoolRegistrationInfoTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualDesktopHostPoolRegistrationInfo.VirtualDesktopHostPoolRegistrationInfoTimeouts">VirtualDesktopHostPoolRegistrationInfoTimeouts</a>

---



