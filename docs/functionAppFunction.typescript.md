# `functionAppFunction` Submodule <a name="`functionAppFunction` Submodule" id="@cdktf/provider-azurerm.functionAppFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppFunction <a name="FunctionAppFunction" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function azurerm_function_app_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

new functionAppFunction.FunctionAppFunction(scope: Construct, id: string, config: FunctionAppFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig">FunctionAppFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig">FunctionAppFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetTestData">resetTestData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFile` <a name="putFile" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putFile"></a>

```typescript
public putFile(value: IResolvable | FunctionAppFunctionFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: FunctionAppFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetTestData` <a name="resetTestData" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetTestData"></a>

```typescript
public resetTestData(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionAppFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isConstruct"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

functionAppFunction.FunctionAppFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformElement"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

functionAppFunction.FunctionAppFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformResource"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

functionAppFunction.FunctionAppFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

functionAppFunction.FunctionAppFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FunctionAppFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FunctionAppFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FunctionAppFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configUrl">configUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.file">file</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList">FunctionAppFunctionFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.invocationUrl">invocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.scriptRootPathUrl">scriptRootPathUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.scriptUrl">scriptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.secretsFileUrl">secretsFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testDataUrl">testDataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference">FunctionAppFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configJsonInput">configJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.fileInput">fileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.functionAppIdInput">functionAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testDataInput">testDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configJson">configJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.functionAppId">functionAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testData">testData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configUrl`<sup>Required</sup> <a name="configUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configUrl"></a>

```typescript
public readonly configUrl: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.file"></a>

```typescript
public readonly file: FunctionAppFunctionFileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList">FunctionAppFunctionFileList</a>

---

##### `invocationUrl`<sup>Required</sup> <a name="invocationUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.invocationUrl"></a>

```typescript
public readonly invocationUrl: string;
```

- *Type:* string

---

##### `scriptRootPathUrl`<sup>Required</sup> <a name="scriptRootPathUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.scriptRootPathUrl"></a>

```typescript
public readonly scriptRootPathUrl: string;
```

- *Type:* string

---

##### `scriptUrl`<sup>Required</sup> <a name="scriptUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.scriptUrl"></a>

```typescript
public readonly scriptUrl: string;
```

- *Type:* string

---

##### `secretsFileUrl`<sup>Required</sup> <a name="secretsFileUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.secretsFileUrl"></a>

```typescript
public readonly secretsFileUrl: string;
```

- *Type:* string

---

##### `testDataUrl`<sup>Required</sup> <a name="testDataUrl" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testDataUrl"></a>

```typescript
public readonly testDataUrl: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference">FunctionAppFunctionTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `configJsonInput`<sup>Optional</sup> <a name="configJsonInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configJsonInput"></a>

```typescript
public readonly configJsonInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.fileInput"></a>

```typescript
public readonly fileInput: IResolvable | FunctionAppFunctionFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]

---

##### `functionAppIdInput`<sup>Optional</sup> <a name="functionAppIdInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.functionAppIdInput"></a>

```typescript
public readonly functionAppIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `testDataInput`<sup>Optional</sup> <a name="testDataInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testDataInput"></a>

```typescript
public readonly testDataInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FunctionAppFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a>

---

##### `configJson`<sup>Required</sup> <a name="configJson" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.configJson"></a>

```typescript
public readonly configJson: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `testData`<sup>Required</sup> <a name="testData" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.testData"></a>

```typescript
public readonly testData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppFunctionConfig <a name="FunctionAppFunctionConfig" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

const functionAppFunctionConfig: functionAppFunction.FunctionAppFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.configJson">configJson</a></code> | <code>string</code> | The config for this Function in JSON format. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.functionAppId">functionAppId</a></code> | <code>string</code> | The ID of the Function App in which this function should reside. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.name">name</a></code> | <code>string</code> | The name of the function. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should this function be enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.file">file</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]</code> | file block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#id FunctionAppFunction#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.language">language</a></code> | <code>string</code> | The language the Function is written in. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.testData">testData</a></code> | <code>string</code> | The test data for the function. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configJson`<sup>Required</sup> <a name="configJson" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.configJson"></a>

```typescript
public readonly configJson: string;
```

- *Type:* string

The config for this Function in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#config_json FunctionAppFunction#config_json}

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

The ID of the Function App in which this function should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#function_app_id FunctionAppFunction#function_app_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#name FunctionAppFunction#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should this function be enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#enabled FunctionAppFunction#enabled}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.file"></a>

```typescript
public readonly file: IResolvable | FunctionAppFunctionFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#file FunctionAppFunction#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#id FunctionAppFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language the Function is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#language FunctionAppFunction#language}

---

##### `testData`<sup>Optional</sup> <a name="testData" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.testData"></a>

```typescript
public readonly testData: string;
```

- *Type:* string

The test data for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#test_data FunctionAppFunction#test_data}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FunctionAppFunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#timeouts FunctionAppFunction#timeouts}

---

### FunctionAppFunctionFile <a name="FunctionAppFunctionFile" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

const functionAppFunctionFile: functionAppFunction.FunctionAppFunctionFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile.property.content">content</a></code> | <code>string</code> | The content of the file. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile.property.name">name</a></code> | <code>string</code> | The filename of the file to be uploaded. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#content FunctionAppFunction#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The filename of the file to be uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#name FunctionAppFunction#name}

---

### FunctionAppFunctionTimeouts <a name="FunctionAppFunctionTimeouts" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

const functionAppFunctionTimeouts: functionAppFunction.FunctionAppFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#create FunctionAppFunction#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#delete FunctionAppFunction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#read FunctionAppFunction#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#update FunctionAppFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#create FunctionAppFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#delete FunctionAppFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#read FunctionAppFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/function_app_function#update FunctionAppFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppFunctionFileList <a name="FunctionAppFunctionFileList" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

new functionAppFunction.FunctionAppFunctionFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.get"></a>

```typescript
public get(index: number): FunctionAppFunctionFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppFunctionFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>[]

---


### FunctionAppFunctionFileOutputReference <a name="FunctionAppFunctionFileOutputReference" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

new functionAppFunction.FunctionAppFunctionFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppFunctionFile;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionFile">FunctionAppFunctionFile</a>

---


### FunctionAppFunctionTimeoutsOutputReference <a name="FunctionAppFunctionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { functionAppFunction } from '@cdktf/provider-azurerm'

new functionAppFunction.FunctionAppFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FunctionAppFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.functionAppFunction.FunctionAppFunctionTimeouts">FunctionAppFunctionTimeouts</a>

---



