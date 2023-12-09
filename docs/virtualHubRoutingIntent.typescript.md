# `virtualHubRoutingIntent` Submodule <a name="`virtualHubRoutingIntent` Submodule" id="@cdktf/provider-azurerm.virtualHubRoutingIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRoutingIntent <a name="VirtualHubRoutingIntent" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent azurerm_virtual_hub_routing_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

new virtualHubRoutingIntent.VirtualHubRoutingIntent(scope: Construct, id: string, config: VirtualHubRoutingIntentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig">VirtualHubRoutingIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig">VirtualHubRoutingIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy">putRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutingPolicy` <a name="putRoutingPolicy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy"></a>

```typescript
public putRoutingPolicy(value: IResolvable | VirtualHubRoutingIntentRoutingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putRoutingPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualHubRoutingIntentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubRoutingIntent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualHubRoutingIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualHubRoutingIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualHubRoutingIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubRoutingIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicy">routingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList">VirtualHubRoutingIntentRoutingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference">VirtualHubRoutingIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicyInput">routingPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubIdInput">virtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: VirtualHubRoutingIntentRoutingPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList">VirtualHubRoutingIntentRoutingPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubRoutingIntentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference">VirtualHubRoutingIntentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.routingPolicyInput"></a>

```typescript
public readonly routingPolicyInput: IResolvable | VirtualHubRoutingIntentRoutingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualHubRoutingIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

---

##### `virtualHubIdInput`<sup>Optional</sup> <a name="virtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubIdInput"></a>

```typescript
public readonly virtualHubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRoutingIntentConfig <a name="VirtualHubRoutingIntentConfig" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

const virtualHubRoutingIntentConfig: virtualHubRoutingIntent.VirtualHubRoutingIntentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.routingPolicy">routingPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]</code> | routing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.virtualHubId">virtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}.

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: IResolvable | VirtualHubRoutingIntentRoutingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#routing_policy VirtualHubRoutingIntent#routing_policy}

---

##### `virtualHubId`<sup>Required</sup> <a name="virtualHubId" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.virtualHubId"></a>

```typescript
public readonly virtualHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#virtual_hub_id VirtualHubRoutingIntent#virtual_hub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#id VirtualHubRoutingIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualHubRoutingIntentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#timeouts VirtualHubRoutingIntent#timeouts}

---

### VirtualHubRoutingIntentRoutingPolicy <a name="VirtualHubRoutingIntentRoutingPolicy" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

const virtualHubRoutingIntentRoutingPolicy: virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.destinations">destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#destinations VirtualHubRoutingIntent#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.nextHop">nextHop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#next_hop VirtualHubRoutingIntent#next_hop}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#destinations VirtualHubRoutingIntent#destinations}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#name VirtualHubRoutingIntent#name}.

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#next_hop VirtualHubRoutingIntent#next_hop}.

---

### VirtualHubRoutingIntentTimeouts <a name="VirtualHubRoutingIntentTimeouts" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

const virtualHubRoutingIntentTimeouts: virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#create VirtualHubRoutingIntent#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#delete VirtualHubRoutingIntent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#read VirtualHubRoutingIntent#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#update VirtualHubRoutingIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#create VirtualHubRoutingIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#delete VirtualHubRoutingIntent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#read VirtualHubRoutingIntent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/virtual_hub_routing_intent#update VirtualHubRoutingIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRoutingIntentRoutingPolicyList <a name="VirtualHubRoutingIntentRoutingPolicyList" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

new virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get"></a>

```typescript
public get(index: number): VirtualHubRoutingIntentRoutingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubRoutingIntentRoutingPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>[]

---


### VirtualHubRoutingIntentRoutingPolicyOutputReference <a name="VirtualHubRoutingIntentRoutingPolicyOutputReference" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

new virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHopInput"></a>

```typescript
public readonly nextHopInput: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubRoutingIntentRoutingPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentRoutingPolicy">VirtualHubRoutingIntentRoutingPolicy</a>

---


### VirtualHubRoutingIntentTimeoutsOutputReference <a name="VirtualHubRoutingIntentTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualHubRoutingIntent } from '@cdktf/provider-azurerm'

new virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualHubRoutingIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualHubRoutingIntent.VirtualHubRoutingIntentTimeouts">VirtualHubRoutingIntentTimeouts</a>

---



