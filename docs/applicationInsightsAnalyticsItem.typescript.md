# `applicationInsightsAnalyticsItem` Submodule <a name="`applicationInsightsAnalyticsItem` Submodule" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsAnalyticsItem <a name="ApplicationInsightsAnalyticsItem" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item azurerm_application_insights_analytics_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

new applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem(scope: Construct, id: string, config: ApplicationInsightsAnalyticsItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig">ApplicationInsightsAnalyticsItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig">ApplicationInsightsAnalyticsItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias">resetFunctionAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationInsightsAnalyticsItemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

---

##### `resetFunctionAlias` <a name="resetFunctionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias"></a>

```typescript
public resetFunctionAlias(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsAnalyticsItem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationInsightsAnalyticsItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationInsightsAnalyticsItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationInsightsAnalyticsItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsAnalyticsItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput">functionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias">functionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsAnalyticsItemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput"></a>

```typescript
public readonly applicationInsightsIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `functionAliasInput`<sup>Optional</sup> <a name="functionAliasInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput"></a>

```typescript
public readonly functionAliasInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationInsightsAnalyticsItemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `functionAlias`<sup>Required</sup> <a name="functionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias"></a>

```typescript
public readonly functionAlias: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsAnalyticsItemConfig <a name="ApplicationInsightsAnalyticsItemConfig" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.Initializer"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

const applicationInsightsAnalyticsItemConfig: applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias">functionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}.

---

##### `functionAlias`<sup>Optional</sup> <a name="functionAlias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias"></a>

```typescript
public readonly functionAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationInsightsAnalyticsItemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#timeouts ApplicationInsightsAnalyticsItem#timeouts}

---

### ApplicationInsightsAnalyticsItemTimeouts <a name="ApplicationInsightsAnalyticsItemTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.Initializer"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

const applicationInsightsAnalyticsItemTimeouts: applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsAnalyticsItemTimeoutsOutputReference <a name="ApplicationInsightsAnalyticsItemTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationInsightsAnalyticsItem } from '@cdktf/provider-azurerm'

new applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationInsightsAnalyticsItemTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

---



