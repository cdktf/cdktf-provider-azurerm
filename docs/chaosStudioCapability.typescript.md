# `chaosStudioCapability` Submodule <a name="`chaosStudioCapability` Submodule" id="@cdktf/provider-azurerm.chaosStudioCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChaosStudioCapability <a name="ChaosStudioCapability" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability azurerm_chaos_studio_capability}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

new chaosStudioCapability.ChaosStudioCapability(scope: Construct, id: string, config: ChaosStudioCapabilityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig">ChaosStudioCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig">ChaosStudioCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.putTimeouts"></a>

```typescript
public putTimeouts(value: ChaosStudioCapabilityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChaosStudioCapability resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isConstruct"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

chaosStudioCapability.ChaosStudioCapability.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformElement"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

chaosStudioCapability.ChaosStudioCapability.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformResource"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

chaosStudioCapability.ChaosStudioCapability.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

chaosStudioCapability.ChaosStudioCapability.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ChaosStudioCapability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChaosStudioCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChaosStudioCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChaosStudioCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference">ChaosStudioCapabilityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.urn">urn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.capabilityTypeInput">capabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.chaosStudioTargetIdInput">chaosStudioTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.capabilityType">capabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.chaosStudioTargetId">chaosStudioTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.timeouts"></a>

```typescript
public readonly timeouts: ChaosStudioCapabilityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference">ChaosStudioCapabilityTimeoutsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.urn"></a>

```typescript
public readonly urn: string;
```

- *Type:* string

---

##### `capabilityTypeInput`<sup>Optional</sup> <a name="capabilityTypeInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.capabilityTypeInput"></a>

```typescript
public readonly capabilityTypeInput: string;
```

- *Type:* string

---

##### `chaosStudioTargetIdInput`<sup>Optional</sup> <a name="chaosStudioTargetIdInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.chaosStudioTargetIdInput"></a>

```typescript
public readonly chaosStudioTargetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChaosStudioCapabilityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a>

---

##### `capabilityType`<sup>Required</sup> <a name="capabilityType" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.capabilityType"></a>

```typescript
public readonly capabilityType: string;
```

- *Type:* string

---

##### `chaosStudioTargetId`<sup>Required</sup> <a name="chaosStudioTargetId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.chaosStudioTargetId"></a>

```typescript
public readonly chaosStudioTargetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapability.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChaosStudioCapabilityConfig <a name="ChaosStudioCapabilityConfig" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.Initializer"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

const chaosStudioCapabilityConfig: chaosStudioCapability.ChaosStudioCapabilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.capabilityType">capabilityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#capability_type ChaosStudioCapability#capability_type}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.chaosStudioTargetId">chaosStudioTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#chaos_studio_target_id ChaosStudioCapability#chaos_studio_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#id ChaosStudioCapability#id}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilityType`<sup>Required</sup> <a name="capabilityType" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.capabilityType"></a>

```typescript
public readonly capabilityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#capability_type ChaosStudioCapability#capability_type}.

---

##### `chaosStudioTargetId`<sup>Required</sup> <a name="chaosStudioTargetId" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.chaosStudioTargetId"></a>

```typescript
public readonly chaosStudioTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#chaos_studio_target_id ChaosStudioCapability#chaos_studio_target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#id ChaosStudioCapability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChaosStudioCapabilityTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#timeouts ChaosStudioCapability#timeouts}

---

### ChaosStudioCapabilityTimeouts <a name="ChaosStudioCapabilityTimeouts" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.Initializer"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

const chaosStudioCapabilityTimeouts: chaosStudioCapability.ChaosStudioCapabilityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#create ChaosStudioCapability#create}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#delete ChaosStudioCapability#delete}. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#read ChaosStudioCapability#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#create ChaosStudioCapability#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#delete ChaosStudioCapability#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/chaos_studio_capability#read ChaosStudioCapability#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChaosStudioCapabilityTimeoutsOutputReference <a name="ChaosStudioCapabilityTimeoutsOutputReference" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.Initializer"></a>

```typescript
import { chaosStudioCapability } from '@cdktf/provider-azurerm'

new chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChaosStudioCapabilityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.chaosStudioCapability.ChaosStudioCapabilityTimeouts">ChaosStudioCapabilityTimeouts</a>

---



