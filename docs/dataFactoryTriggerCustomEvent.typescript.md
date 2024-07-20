# `dataFactoryTriggerCustomEvent` Submodule <a name="`dataFactoryTriggerCustomEvent` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerCustomEvent <a name="DataFactoryTriggerCustomEvent" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event azurerm_data_factory_trigger_custom_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent(scope: Construct, id: string, config: DataFactoryTriggerCustomEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig">DataFactoryTriggerCustomEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig">DataFactoryTriggerCustomEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith">resetSubjectBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith">resetSubjectEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline"></a>

```typescript
public putPipeline(value: IResolvable | DataFactoryTriggerCustomEventPipeline[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putPipeline.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryTriggerCustomEventTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---

##### `resetActivated` <a name="resetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetActivated"></a>

```typescript
public resetActivated(): void
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubjectBeginsWith` <a name="resetSubjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectBeginsWith"></a>

```typescript
public resetSubjectBeginsWith(): void
```

##### `resetSubjectEndsWith` <a name="resetSubjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetSubjectEndsWith"></a>

```typescript
public resetSubjectEndsWith(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryTriggerCustomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryTriggerCustomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerCustomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput">activatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput">eventgridTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput">pipelineInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput">subjectBeginsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput">subjectEndsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId">eventgridTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith">subjectEndsWith</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipeline"></a>

```typescript
public readonly pipeline: DataFactoryTriggerCustomEventPipelineList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList">DataFactoryTriggerCustomEventPipelineList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerCustomEventTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference">DataFactoryTriggerCustomEventTimeoutsOutputReference</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activatedInput"></a>

```typescript
public readonly activatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventgridTopicIdInput`<sup>Optional</sup> <a name="eventgridTopicIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicIdInput"></a>

```typescript
public readonly eventgridTopicIdInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: IResolvable | DataFactoryTriggerCustomEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]

---

##### `subjectBeginsWithInput`<sup>Optional</sup> <a name="subjectBeginsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWithInput"></a>

```typescript
public readonly subjectBeginsWithInput: string;
```

- *Type:* string

---

##### `subjectEndsWithInput`<sup>Optional</sup> <a name="subjectEndsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWithInput"></a>

```typescript
public readonly subjectEndsWithInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryTriggerCustomEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventgridTopicId`<sup>Required</sup> <a name="eventgridTopicId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.eventgridTopicId"></a>

```typescript
public readonly eventgridTopicId: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subjectBeginsWith`<sup>Required</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectBeginsWith"></a>

```typescript
public readonly subjectBeginsWith: string;
```

- *Type:* string

---

##### `subjectEndsWith`<sup>Required</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.subjectEndsWith"></a>

```typescript
public readonly subjectEndsWith: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEvent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerCustomEventConfig <a name="DataFactoryTriggerCustomEventConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerCustomEventConfig: dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId">eventgridTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline">pipeline</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith">subjectBeginsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith">subjectEndsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}.

---

##### `eventgridTopicId`<sup>Required</sup> <a name="eventgridTopicId" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.eventgridTopicId"></a>

```typescript
public readonly eventgridTopicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.pipeline"></a>

```typescript
public readonly pipeline: IResolvable | DataFactoryTriggerCustomEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subjectBeginsWith`<sup>Optional</sup> <a name="subjectBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectBeginsWith"></a>

```typescript
public readonly subjectBeginsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}.

---

##### `subjectEndsWith`<sup>Optional</sup> <a name="subjectEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.subjectEndsWith"></a>

```typescript
public readonly subjectEndsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerCustomEventTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}

---

### DataFactoryTriggerCustomEventPipeline <a name="DataFactoryTriggerCustomEventPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerCustomEventPipeline: dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}.

---

### DataFactoryTriggerCustomEventTimeouts <a name="DataFactoryTriggerCustomEventTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerCustomEventTimeouts: dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerCustomEventPipelineList <a name="DataFactoryTriggerCustomEventPipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get"></a>

```typescript
public get(index: number): DataFactoryTriggerCustomEventPipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerCustomEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>[]

---


### DataFactoryTriggerCustomEventPipelineOutputReference <a name="DataFactoryTriggerCustomEventPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerCustomEventPipeline;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventPipeline">DataFactoryTriggerCustomEventPipeline</a>

---


### DataFactoryTriggerCustomEventTimeoutsOutputReference <a name="DataFactoryTriggerCustomEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerCustomEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerCustomEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerCustomEvent.DataFactoryTriggerCustomEventTimeouts">DataFactoryTriggerCustomEventTimeouts</a>

---



