# `devCenterProjectPool` Submodule <a name="`devCenterProjectPool` Submodule" id="@cdktf/provider-azurerm.devCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectPool <a name="DevCenterProjectPool" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

new devCenterProjectPool.DevCenterProjectPool(scope: Construct, id: string, config: DevCenterProjectPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig">DevCenterProjectPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes">resetStopOnDisconnectGracePeriodMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts"></a>

```typescript
public putTimeouts(value: DevCenterProjectPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStopOnDisconnectGracePeriodMinutes` <a name="resetStopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes"></a>

```typescript
public resetStopOnDisconnectGracePeriodMinutes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

devCenterProjectPool.DevCenterProjectPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

devCenterProjectPool.DevCenterProjectPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

devCenterProjectPool.DevCenterProjectPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

devCenterProjectPool.DevCenterProjectPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterProjectPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput">devBoxDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput">devCenterAttachedNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput">localAdministratorEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput">stopOnDisconnectGracePeriodMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName">devBoxDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName">devCenterAttachedNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled">localAdministratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">stopOnDisconnectGracePeriodMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterProjectPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `devBoxDefinitionNameInput`<sup>Optional</sup> <a name="devBoxDefinitionNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput"></a>

```typescript
public readonly devBoxDefinitionNameInput: string;
```

- *Type:* string

---

##### `devCenterAttachedNetworkNameInput`<sup>Optional</sup> <a name="devCenterAttachedNetworkNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput"></a>

```typescript
public readonly devCenterAttachedNetworkNameInput: string;
```

- *Type:* string

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput"></a>

```typescript
public readonly devCenterProjectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAdministratorEnabledInput`<sup>Optional</sup> <a name="localAdministratorEnabledInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput"></a>

```typescript
public readonly localAdministratorEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stopOnDisconnectGracePeriodMinutesInput`<sup>Optional</sup> <a name="stopOnDisconnectGracePeriodMinutesInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput"></a>

```typescript
public readonly stopOnDisconnectGracePeriodMinutesInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DevCenterProjectPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `devBoxDefinitionName`<sup>Required</sup> <a name="devBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName"></a>

```typescript
public readonly devBoxDefinitionName: string;
```

- *Type:* string

---

##### `devCenterAttachedNetworkName`<sup>Required</sup> <a name="devCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```typescript
public readonly devCenterAttachedNetworkName: string;
```

- *Type:* string

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAdministratorEnabled`<sup>Required</sup> <a name="localAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled"></a>

```typescript
public readonly localAdministratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stopOnDisconnectGracePeriodMinutes`<sup>Required</sup> <a name="stopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```typescript
public readonly stopOnDisconnectGracePeriodMinutes: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectPoolConfig <a name="DevCenterProjectPoolConfig" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.Initializer"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

const devCenterProjectPoolConfig: devCenterProjectPool.DevCenterProjectPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName">devBoxDefinitionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName">devCenterAttachedNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled">localAdministratorEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes">stopOnDisconnectGracePeriodMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `devBoxDefinitionName`<sup>Required</sup> <a name="devBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName"></a>

```typescript
public readonly devBoxDefinitionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `devCenterAttachedNetworkName`<sup>Required</sup> <a name="devCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName"></a>

```typescript
public readonly devCenterAttachedNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `localAdministratorEnabled`<sup>Required</sup> <a name="localAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled"></a>

```typescript
public readonly localAdministratorEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stopOnDisconnectGracePeriodMinutes`<sup>Optional</sup> <a name="stopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes"></a>

```typescript
public readonly stopOnDisconnectGracePeriodMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DevCenterProjectPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

### DevCenterProjectPoolTimeouts <a name="DevCenterProjectPoolTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.Initializer"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

const devCenterProjectPoolTimeouts: devCenterProjectPool.DevCenterProjectPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectPoolTimeoutsOutputReference <a name="DevCenterProjectPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { devCenterProjectPool } from '@cdktf/provider-azurerm'

new devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevCenterProjectPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---



