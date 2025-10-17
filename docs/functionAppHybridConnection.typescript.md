# `functionAppHybridConnection` Submodule <a name="`functionAppHybridConnection` Submodule" id="@cdktf/provider-azurerm.functionAppHybridConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppHybridConnection <a name="FunctionAppHybridConnection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection azurerm_function_app_hybrid_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

new functionAppHybridConnection.FunctionAppHybridConnection(scope: Construct, id: string, config: FunctionAppHybridConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig">FunctionAppHybridConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig">FunctionAppHybridConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName">resetSendKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: FunctionAppHybridConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSendKeyName` <a name="resetSendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName"></a>

```typescript
public resetSendKeyName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionAppHybridConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

functionAppHybridConnection.FunctionAppHybridConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionAppHybridConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionAppHybridConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionAppHybridConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppHybridConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName">relayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue">sendKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace">serviceBusNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix">serviceBusSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput">functionAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput">relayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput">sendKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId">functionAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId">relayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName">sendKeyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `relayName`<sup>Required</sup> <a name="relayName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName"></a>

```typescript
public readonly relayName: string;
```

- *Type:* string

---

##### `sendKeyValue`<sup>Required</sup> <a name="sendKeyValue" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue"></a>

```typescript
public readonly sendKeyValue: string;
```

- *Type:* string

---

##### `serviceBusNamespace`<sup>Required</sup> <a name="serviceBusNamespace" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace"></a>

```typescript
public readonly serviceBusNamespace: string;
```

- *Type:* string

---

##### `serviceBusSuffix`<sup>Required</sup> <a name="serviceBusSuffix" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix"></a>

```typescript
public readonly serviceBusSuffix: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppHybridConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a>

---

##### `functionAppIdInput`<sup>Optional</sup> <a name="functionAppIdInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput"></a>

```typescript
public readonly functionAppIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `relayIdInput`<sup>Optional</sup> <a name="relayIdInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput"></a>

```typescript
public readonly relayIdInput: string;
```

- *Type:* string

---

##### `sendKeyNameInput`<sup>Optional</sup> <a name="sendKeyNameInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput"></a>

```typescript
public readonly sendKeyNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FunctionAppHybridConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId"></a>

```typescript
public readonly relayId: string;
```

- *Type:* string

---

##### `sendKeyName`<sup>Required</sup> <a name="sendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName"></a>

```typescript
public readonly sendKeyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppHybridConnectionConfig <a name="FunctionAppHybridConnectionConfig" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.Initializer"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

const functionAppHybridConnectionConfig: functionAppHybridConnection.FunctionAppHybridConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId">functionAppId</a></code> | <code>string</code> | The ID of the Function App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname">hostname</a></code> | <code>string</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port">port</a></code> | <code>number</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId">relayId</a></code> | <code>string</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName">sendKeyName</a></code> | <code>string</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

The ID of the Function App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#function_app_id FunctionAppHybridConnection#function_app_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#hostname FunctionAppHybridConnection#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#port FunctionAppHybridConnection#port}

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId"></a>

```typescript
public readonly relayId: string;
```

- *Type:* string

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#relay_id FunctionAppHybridConnection#relay_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendKeyName`<sup>Optional</sup> <a name="sendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName"></a>

```typescript
public readonly sendKeyName: string;
```

- *Type:* string

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#send_key_name FunctionAppHybridConnection#send_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppHybridConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#timeouts FunctionAppHybridConnection#timeouts}

---

### FunctionAppHybridConnectionTimeouts <a name="FunctionAppHybridConnectionTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.Initializer"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

const functionAppHybridConnectionTimeouts: functionAppHybridConnection.FunctionAppHybridConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppHybridConnectionTimeoutsOutputReference <a name="FunctionAppHybridConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { functionAppHybridConnection } from '@cdktf/provider-azurerm'

new functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppHybridConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---



