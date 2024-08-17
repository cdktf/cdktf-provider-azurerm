# `expressRoutePort` Submodule <a name="`expressRoutePort` Submodule" id="@cdktf/provider-azurerm.expressRoutePort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePort <a name="ExpressRoutePort" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port azurerm_express_route_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

new expressRoutePort.ExpressRoutePort(scope: Construct, id: string, config: ExpressRoutePortConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig">ExpressRoutePortConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1">putLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2">putLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType">resetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1">resetLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2">resetLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity"></a>

```typescript
public putIdentity(value: ExpressRoutePortIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `putLink1` <a name="putLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1"></a>

```typescript
public putLink1(value: ExpressRoutePortLink1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `putLink2` <a name="putLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2"></a>

```typescript
public putLink2(value: ExpressRoutePortLink2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts"></a>

```typescript
public putTimeouts(value: ExpressRoutePortTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `resetBillingType` <a name="resetBillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType"></a>

```typescript
public resetBillingType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLink1` <a name="resetLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1"></a>

```typescript
public resetLink1(): void
```

##### `resetLink2` <a name="resetLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2"></a>

```typescript
public resetLink2(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

expressRoutePort.ExpressRoutePort.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

expressRoutePort.ExpressRoutePort.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

expressRoutePort.ExpressRoutePort.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

expressRoutePort.ExpressRoutePort.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRoutePort to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRoutePort that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePort to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype">ethertype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu">mtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput">bandwidthInGbpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput">billingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput">encapsulationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input">link1Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input">link2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput">peeringLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps">bandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation">encapsulation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation">peeringLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype"></a>

```typescript
public readonly ethertype: string;
```

- *Type:* string

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity"></a>

```typescript
public readonly identity: ExpressRoutePortIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a>

---

##### `link1`<sup>Required</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1"></a>

```typescript
public readonly link1: ExpressRoutePortLink1OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a>

---

##### `link2`<sup>Required</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2"></a>

```typescript
public readonly link2: ExpressRoutePortLink2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu"></a>

```typescript
public readonly mtu: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRoutePortTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a>

---

##### `bandwidthInGbpsInput`<sup>Optional</sup> <a name="bandwidthInGbpsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput"></a>

```typescript
public readonly bandwidthInGbpsInput: number;
```

- *Type:* number

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput"></a>

```typescript
public readonly billingTypeInput: string;
```

- *Type:* string

---

##### `encapsulationInput`<sup>Optional</sup> <a name="encapsulationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput"></a>

```typescript
public readonly encapsulationInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput"></a>

```typescript
public readonly identityInput: ExpressRoutePortIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `link1Input`<sup>Optional</sup> <a name="link1Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input"></a>

```typescript
public readonly link1Input: ExpressRoutePortLink1;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `link2Input`<sup>Optional</sup> <a name="link2Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input"></a>

```typescript
public readonly link2Input: ExpressRoutePortLink2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peeringLocationInput`<sup>Optional</sup> <a name="peeringLocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput"></a>

```typescript
public readonly peeringLocationInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ExpressRoutePortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `bandwidthInGbps`<sup>Required</sup> <a name="bandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps"></a>

```typescript
public readonly bandwidthInGbps: number;
```

- *Type:* number

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation"></a>

```typescript
public readonly encapsulation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation"></a>

```typescript
public readonly peeringLocation: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortConfig <a name="ExpressRoutePortConfig" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

const expressRoutePortConfig: expressRoutePort.ExpressRoutePortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps">bandwidthInGbps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation">encapsulation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation">peeringLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType">billingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidthInGbps`<sup>Required</sup> <a name="bandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps"></a>

```typescript
public readonly bandwidthInGbps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation"></a>

```typescript
public readonly encapsulation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation"></a>

```typescript
public readonly peeringLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity"></a>

```typescript
public readonly identity: ExpressRoutePortIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `link1`<sup>Optional</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1"></a>

```typescript
public readonly link1: ExpressRoutePortLink1;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `link2`<sup>Optional</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2"></a>

```typescript
public readonly link2: ExpressRoutePortLink2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ExpressRoutePortTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

### ExpressRoutePortIdentity <a name="ExpressRoutePortIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

const expressRoutePortIdentity: expressRoutePort.ExpressRoutePortIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#type ExpressRoutePort#type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

### ExpressRoutePortLink1 <a name="ExpressRoutePortLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

const expressRoutePortLink1: expressRoutePort.ExpressRoutePortLink1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher">macsecCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId"></a>

```typescript
public readonly macsecCakKeyvaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsecCipher`<sup>Optional</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher"></a>

```typescript
public readonly macsecCipher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId"></a>

```typescript
public readonly macsecCknKeyvaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsecSciEnabled`<sup>Optional</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled"></a>

```typescript
public readonly macsecSciEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortLink2 <a name="ExpressRoutePortLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

const expressRoutePortLink2: expressRoutePort.ExpressRoutePortLink2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher">macsecCipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId"></a>

```typescript
public readonly macsecCakKeyvaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsecCipher`<sup>Optional</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher"></a>

```typescript
public readonly macsecCipher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId"></a>

```typescript
public readonly macsecCknKeyvaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsecSciEnabled`<sup>Optional</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled"></a>

```typescript
public readonly macsecSciEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortTimeouts <a name="ExpressRoutePortTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

const expressRoutePortTimeouts: expressRoutePort.ExpressRoutePortTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#create ExpressRoutePort#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#read ExpressRoutePort#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#update ExpressRoutePort#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortIdentityOutputReference <a name="ExpressRoutePortIdentityOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

new expressRoutePort.ExpressRoutePortIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRoutePortIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---


### ExpressRoutePortLink1OutputReference <a name="ExpressRoutePortLink1OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

new expressRoutePort.ExpressRoutePortLink1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId">resetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher">resetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId">resetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled">resetMacsecSciEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetMacsecCakKeyvaultSecretId` <a name="resetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```typescript
public resetMacsecCakKeyvaultSecretId(): void
```

##### `resetMacsecCipher` <a name="resetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher"></a>

```typescript
public resetMacsecCipher(): void
```

##### `resetMacsecCknKeyvaultSecretId` <a name="resetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```typescript
public resetMacsecCknKeyvaultSecretId(): void
```

##### `resetMacsecSciEnabled` <a name="resetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled"></a>

```typescript
public resetMacsecSciEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId">patchPanelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId">rackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName">routerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput">macsecCakKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput">macsecCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput">macsecCknKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput">macsecSciEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher">macsecCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `patchPanelId`<sup>Required</sup> <a name="patchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId"></a>

```typescript
public readonly patchPanelId: string;
```

- *Type:* string

---

##### `rackId`<sup>Required</sup> <a name="rackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId"></a>

```typescript
public readonly rackId: string;
```

- *Type:* string

---

##### `routerName`<sup>Required</sup> <a name="routerName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName"></a>

```typescript
public readonly routerName: string;
```

- *Type:* string

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```typescript
public readonly macsecCakKeyvaultSecretIdInput: string;
```

- *Type:* string

---

##### `macsecCipherInput`<sup>Optional</sup> <a name="macsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput"></a>

```typescript
public readonly macsecCipherInput: string;
```

- *Type:* string

---

##### `macsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```typescript
public readonly macsecCknKeyvaultSecretIdInput: string;
```

- *Type:* string

---

##### `macsecSciEnabledInput`<sup>Optional</sup> <a name="macsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput"></a>

```typescript
public readonly macsecSciEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretId`<sup>Required</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId"></a>

```typescript
public readonly macsecCakKeyvaultSecretId: string;
```

- *Type:* string

---

##### `macsecCipher`<sup>Required</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher"></a>

```typescript
public readonly macsecCipher: string;
```

- *Type:* string

---

##### `macsecCknKeyvaultSecretId`<sup>Required</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId"></a>

```typescript
public readonly macsecCknKeyvaultSecretId: string;
```

- *Type:* string

---

##### `macsecSciEnabled`<sup>Required</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled"></a>

```typescript
public readonly macsecSciEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRoutePortLink1;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---


### ExpressRoutePortLink2OutputReference <a name="ExpressRoutePortLink2OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

new expressRoutePort.ExpressRoutePortLink2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId">resetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher">resetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId">resetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled">resetMacsecSciEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled"></a>

```typescript
public resetAdminEnabled(): void
```

##### `resetMacsecCakKeyvaultSecretId` <a name="resetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```typescript
public resetMacsecCakKeyvaultSecretId(): void
```

##### `resetMacsecCipher` <a name="resetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher"></a>

```typescript
public resetMacsecCipher(): void
```

##### `resetMacsecCknKeyvaultSecretId` <a name="resetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```typescript
public resetMacsecCknKeyvaultSecretId(): void
```

##### `resetMacsecSciEnabled` <a name="resetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled"></a>

```typescript
public resetMacsecSciEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId">patchPanelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId">rackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName">routerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput">adminEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput">macsecCakKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput">macsecCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput">macsecCknKeyvaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput">macsecSciEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled">adminEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher">macsecCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `patchPanelId`<sup>Required</sup> <a name="patchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId"></a>

```typescript
public readonly patchPanelId: string;
```

- *Type:* string

---

##### `rackId`<sup>Required</sup> <a name="rackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId"></a>

```typescript
public readonly rackId: string;
```

- *Type:* string

---

##### `routerName`<sup>Required</sup> <a name="routerName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName"></a>

```typescript
public readonly routerName: string;
```

- *Type:* string

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput"></a>

```typescript
public readonly adminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```typescript
public readonly macsecCakKeyvaultSecretIdInput: string;
```

- *Type:* string

---

##### `macsecCipherInput`<sup>Optional</sup> <a name="macsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput"></a>

```typescript
public readonly macsecCipherInput: string;
```

- *Type:* string

---

##### `macsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```typescript
public readonly macsecCknKeyvaultSecretIdInput: string;
```

- *Type:* string

---

##### `macsecSciEnabledInput`<sup>Optional</sup> <a name="macsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput"></a>

```typescript
public readonly macsecSciEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled"></a>

```typescript
public readonly adminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretId`<sup>Required</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId"></a>

```typescript
public readonly macsecCakKeyvaultSecretId: string;
```

- *Type:* string

---

##### `macsecCipher`<sup>Required</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher"></a>

```typescript
public readonly macsecCipher: string;
```

- *Type:* string

---

##### `macsecCknKeyvaultSecretId`<sup>Required</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId"></a>

```typescript
public readonly macsecCknKeyvaultSecretId: string;
```

- *Type:* string

---

##### `macsecSciEnabled`<sup>Required</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled"></a>

```typescript
public readonly macsecSciEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExpressRoutePortLink2;
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---


### ExpressRoutePortTimeoutsOutputReference <a name="ExpressRoutePortTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer"></a>

```typescript
import { expressRoutePort } from '@cdktf/provider-azurerm'

new expressRoutePort.ExpressRoutePortTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ExpressRoutePortTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---



