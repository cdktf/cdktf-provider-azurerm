# `staticWebAppFunctionAppRegistration` Submodule <a name="`staticWebAppFunctionAppRegistration` Submodule" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticWebAppFunctionAppRegistration <a name="StaticWebAppFunctionAppRegistration" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration azurerm_static_web_app_function_app_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

new staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration(scope: Construct, id: string, config: StaticWebAppFunctionAppRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig">StaticWebAppFunctionAppRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig">StaticWebAppFunctionAppRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: StaticWebAppFunctionAppRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StaticWebAppFunctionAppRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StaticWebAppFunctionAppRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StaticWebAppFunctionAppRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StaticWebAppFunctionAppRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StaticWebAppFunctionAppRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference">StaticWebAppFunctionAppRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppIdInput">functionAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppIdInput">staticWebAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppId">functionAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppId">staticWebAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: StaticWebAppFunctionAppRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference">StaticWebAppFunctionAppRegistrationTimeoutsOutputReference</a>

---

##### `functionAppIdInput`<sup>Optional</sup> <a name="functionAppIdInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppIdInput"></a>

```typescript
public readonly functionAppIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `staticWebAppIdInput`<sup>Optional</sup> <a name="staticWebAppIdInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppIdInput"></a>

```typescript
public readonly staticWebAppIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StaticWebAppFunctionAppRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `staticWebAppId`<sup>Required</sup> <a name="staticWebAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.staticWebAppId"></a>

```typescript
public readonly staticWebAppId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StaticWebAppFunctionAppRegistrationConfig <a name="StaticWebAppFunctionAppRegistrationConfig" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.Initializer"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

const staticWebAppFunctionAppRegistrationConfig: staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.functionAppId">functionAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#function_app_id StaticWebAppFunctionAppRegistration#function_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.staticWebAppId">staticWebAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#static_web_app_id StaticWebAppFunctionAppRegistration#static_web_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#id StaticWebAppFunctionAppRegistration#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.functionAppId"></a>

```typescript
public readonly functionAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#function_app_id StaticWebAppFunctionAppRegistration#function_app_id}.

---

##### `staticWebAppId`<sup>Required</sup> <a name="staticWebAppId" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.staticWebAppId"></a>

```typescript
public readonly staticWebAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#static_web_app_id StaticWebAppFunctionAppRegistration#static_web_app_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#id StaticWebAppFunctionAppRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StaticWebAppFunctionAppRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#timeouts StaticWebAppFunctionAppRegistration#timeouts}

---

### StaticWebAppFunctionAppRegistrationTimeouts <a name="StaticWebAppFunctionAppRegistrationTimeouts" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.Initializer"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

const staticWebAppFunctionAppRegistrationTimeouts: staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#create StaticWebAppFunctionAppRegistration#create}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#delete StaticWebAppFunctionAppRegistration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#read StaticWebAppFunctionAppRegistration#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#create StaticWebAppFunctionAppRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#delete StaticWebAppFunctionAppRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/resources/static_web_app_function_app_registration#read StaticWebAppFunctionAppRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StaticWebAppFunctionAppRegistrationTimeoutsOutputReference <a name="StaticWebAppFunctionAppRegistrationTimeoutsOutputReference" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { staticWebAppFunctionAppRegistration } from '@cdktf/provider-azurerm'

new staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StaticWebAppFunctionAppRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.staticWebAppFunctionAppRegistration.StaticWebAppFunctionAppRegistrationTimeouts">StaticWebAppFunctionAppRegistrationTimeouts</a>

---



