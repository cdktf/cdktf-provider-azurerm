# `applicationInsightsWebTest` Submodule <a name="`applicationInsightsWebTest` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWebTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWebTest <a name="ApplicationInsightsWebTest" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test azurerm_application_insights_web_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsWebTest.ApplicationInsightsWebTest(scope: Construct, id: string, config: ApplicationInsightsWebTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig">ApplicationInsightsWebTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig">ApplicationInsightsWebTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetRetryEnabled">resetRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsWebTestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetryEnabled` <a name="resetRetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetRetryEnabled"></a>

```typescript
public resetRetryEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsWebTest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationInsightsWebTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsWebTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsWebTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWebTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.syntheticMonitorId">syntheticMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference">ApplicationInsightsWebTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequencyInput">frequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocationsInput">geoLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabledInput">retryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequency">frequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocations">geoLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabled">retryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `syntheticMonitorId`<sup>Required</sup> <a name="syntheticMonitorId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.syntheticMonitorId"></a>

```typescript
public readonly syntheticMonitorId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWebTestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference">ApplicationInsightsWebTestTimeoutsOutputReference</a>

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsIdInput"></a>

```typescript
public readonly applicationInsightsIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* number

---

##### `geoLocationsInput`<sup>Optional</sup> <a name="geoLocationsInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocationsInput"></a>

```typescript
public readonly geoLocationsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `retryEnabledInput`<sup>Optional</sup> <a name="retryEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabledInput"></a>

```typescript
public readonly retryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsWebTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocations"></a>

```typescript
public readonly geoLocations: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `retryEnabled`<sup>Required</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabled"></a>

```typescript
public readonly retryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWebTestConfig <a name="ApplicationInsightsWebTestConfig" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.Initializer"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsWebTestConfig: applicationInsightsWebTest.ApplicationInsightsWebTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.configuration">configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.geoLocations">geoLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.frequency">frequency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.retryEnabled">retryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}.

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.geoLocations"></a>

```typescript
public readonly geoLocations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryEnabled`<sup>Optional</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.retryEnabled"></a>

```typescript
public readonly retryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsWebTestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#timeouts ApplicationInsightsWebTest#timeouts}

---

### ApplicationInsightsWebTestTimeouts <a name="ApplicationInsightsWebTestTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.Initializer"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

const applicationInsightsWebTestTimeouts: applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#create ApplicationInsightsWebTest#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#delete ApplicationInsightsWebTest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#read ApplicationInsightsWebTest#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#update ApplicationInsightsWebTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#create ApplicationInsightsWebTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#delete ApplicationInsightsWebTest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#read ApplicationInsightsWebTest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/application_insights_web_test#update ApplicationInsightsWebTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWebTestTimeoutsOutputReference <a name="ApplicationInsightsWebTestTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsWebTest } from '@cdktf/provider-azurerm'

new applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsWebTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

---



