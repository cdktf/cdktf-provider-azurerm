# `networkFunctionCollectorPolicy` Submodule <a name="`networkFunctionCollectorPolicy` Submodule" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionCollectorPolicy <a name="NetworkFunctionCollectorPolicy" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

new networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy(scope: Construct, id: string, config: NetworkFunctionCollectorPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission">putIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion">putIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpfxEmission` <a name="putIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission"></a>

```typescript
public putIpfxEmission(value: NetworkFunctionCollectorPolicyIpfxEmission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `putIpfxIngestion` <a name="putIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion"></a>

```typescript
public putIpfxIngestion(value: NetworkFunctionCollectorPolicyIpfxIngestion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkFunctionCollectorPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFunctionCollectorPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFunctionCollectorPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionCollectorPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission">ipfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion">ipfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput">ipfxEmissionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput">ipfxIngestionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput">trafficCollectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId">trafficCollectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipfxEmission`<sup>Required</sup> <a name="ipfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission"></a>

```typescript
public readonly ipfxEmission: NetworkFunctionCollectorPolicyIpfxEmissionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a>

---

##### `ipfxIngestion`<sup>Required</sup> <a name="ipfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion"></a>

```typescript
public readonly ipfxIngestion: NetworkFunctionCollectorPolicyIpfxIngestionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFunctionCollectorPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipfxEmissionInput`<sup>Optional</sup> <a name="ipfxEmissionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput"></a>

```typescript
public readonly ipfxEmissionInput: NetworkFunctionCollectorPolicyIpfxEmission;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `ipfxIngestionInput`<sup>Optional</sup> <a name="ipfxIngestionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput"></a>

```typescript
public readonly ipfxIngestionInput: NetworkFunctionCollectorPolicyIpfxIngestion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkFunctionCollectorPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---

##### `trafficCollectorIdInput`<sup>Optional</sup> <a name="trafficCollectorIdInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput"></a>

```typescript
public readonly trafficCollectorIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `trafficCollectorId`<sup>Required</sup> <a name="trafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId"></a>

```typescript
public readonly trafficCollectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionCollectorPolicyConfig <a name="NetworkFunctionCollectorPolicyConfig" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

const networkFunctionCollectorPolicyConfig: networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission">ipfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | ipfx_emission block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion">ipfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | ipfx_ingestion block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId">trafficCollectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipfxEmission`<sup>Required</sup> <a name="ipfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission"></a>

```typescript
public readonly ipfxEmission: NetworkFunctionCollectorPolicyIpfxEmission;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

ipfx_emission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}

---

##### `ipfxIngestion`<sup>Required</sup> <a name="ipfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion"></a>

```typescript
public readonly ipfxIngestion: NetworkFunctionCollectorPolicyIpfxIngestion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

ipfx_ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}.

---

##### `trafficCollectorId`<sup>Required</sup> <a name="trafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId"></a>

```typescript
public readonly trafficCollectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFunctionCollectorPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}

---

### NetworkFunctionCollectorPolicyIpfxEmission <a name="NetworkFunctionCollectorPolicyIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

const networkFunctionCollectorPolicyIpfxEmission: networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes">destinationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}. |

---

##### `destinationTypes`<sup>Required</sup> <a name="destinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes"></a>

```typescript
public readonly destinationTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}.

---

### NetworkFunctionCollectorPolicyIpfxIngestion <a name="NetworkFunctionCollectorPolicyIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

const networkFunctionCollectorPolicyIpfxIngestion: networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds">sourceResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}. |

---

##### `sourceResourceIds`<sup>Required</sup> <a name="sourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds"></a>

```typescript
public readonly sourceResourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}.

---

### NetworkFunctionCollectorPolicyTimeouts <a name="NetworkFunctionCollectorPolicyTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

const networkFunctionCollectorPolicyTimeouts: networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionCollectorPolicyIpfxEmissionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxEmissionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

new networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput">destinationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes">destinationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTypesInput`<sup>Optional</sup> <a name="destinationTypesInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput"></a>

```typescript
public readonly destinationTypesInput: string[];
```

- *Type:* string[]

---

##### `destinationTypes`<sup>Required</sup> <a name="destinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes"></a>

```typescript
public readonly destinationTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkFunctionCollectorPolicyIpfxEmission;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---


### NetworkFunctionCollectorPolicyIpfxIngestionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxIngestionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

new networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput">sourceResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds">sourceResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceResourceIdsInput`<sup>Optional</sup> <a name="sourceResourceIdsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput"></a>

```typescript
public readonly sourceResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceResourceIds`<sup>Required</sup> <a name="sourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds"></a>

```typescript
public readonly sourceResourceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkFunctionCollectorPolicyIpfxIngestion;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---


### NetworkFunctionCollectorPolicyTimeoutsOutputReference <a name="NetworkFunctionCollectorPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkFunctionCollectorPolicy } from '@cdktf/provider-azurerm'

new networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkFunctionCollectorPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---



