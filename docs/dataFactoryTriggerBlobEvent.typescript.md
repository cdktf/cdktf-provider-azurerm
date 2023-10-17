# `azurerm_data_factory_trigger_blob_event`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_trigger_blob_event`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event).

# `dataFactoryTriggerBlobEvent` Submodule <a name="`dataFactoryTriggerBlobEvent` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerBlobEvent <a name="DataFactoryTriggerBlobEvent" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event azurerm_data_factory_trigger_blob_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent(scope: Construct, id: string, config: DataFactoryTriggerBlobEventConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig">DataFactoryTriggerBlobEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig">DataFactoryTriggerBlobEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathBeginsWith">resetBlobPathBeginsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathEndsWith">resetBlobPathEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetIgnoreEmptyBlobs">resetIgnoreEmptyBlobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putPipeline` <a name="putPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline"></a>

```typescript
public putPipeline(value: IResolvable | DataFactoryTriggerBlobEventPipeline[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putPipeline.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryTriggerBlobEventTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

---

##### `resetActivated` <a name="resetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetActivated"></a>

```typescript
public resetActivated(): void
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBlobPathBeginsWith` <a name="resetBlobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathBeginsWith"></a>

```typescript
public resetBlobPathBeginsWith(): void
```

##### `resetBlobPathEndsWith` <a name="resetBlobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetBlobPathEndsWith"></a>

```typescript
public resetBlobPathEndsWith(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreEmptyBlobs` <a name="resetIgnoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetIgnoreEmptyBlobs"></a>

```typescript
public resetIgnoreEmptyBlobs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerBlobEvent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryTriggerBlobEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryTriggerBlobEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryTriggerBlobEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerBlobEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList">DataFactoryTriggerBlobEventPipelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference">DataFactoryTriggerBlobEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activatedInput">activatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWithInput">blobPathBeginsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWithInput">blobPathEndsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobsInput">ignoreEmptyBlobsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipelineInput">pipelineInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWith">blobPathBeginsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWith">blobPathEndsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobs">ignoreEmptyBlobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipeline"></a>

```typescript
public readonly pipeline: DataFactoryTriggerBlobEventPipelineList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList">DataFactoryTriggerBlobEventPipelineList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerBlobEventTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference">DataFactoryTriggerBlobEventTimeoutsOutputReference</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activatedInput"></a>

```typescript
public readonly activatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `blobPathBeginsWithInput`<sup>Optional</sup> <a name="blobPathBeginsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWithInput"></a>

```typescript
public readonly blobPathBeginsWithInput: string;
```

- *Type:* string

---

##### `blobPathEndsWithInput`<sup>Optional</sup> <a name="blobPathEndsWithInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWithInput"></a>

```typescript
public readonly blobPathEndsWithInput: string;
```

- *Type:* string

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreEmptyBlobsInput`<sup>Optional</sup> <a name="ignoreEmptyBlobsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobsInput"></a>

```typescript
public readonly ignoreEmptyBlobsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: IResolvable | DataFactoryTriggerBlobEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryTriggerBlobEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `blobPathBeginsWith`<sup>Required</sup> <a name="blobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathBeginsWith"></a>

```typescript
public readonly blobPathBeginsWith: string;
```

- *Type:* string

---

##### `blobPathEndsWith`<sup>Required</sup> <a name="blobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.blobPathEndsWith"></a>

```typescript
public readonly blobPathEndsWith: string;
```

- *Type:* string

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreEmptyBlobs`<sup>Required</sup> <a name="ignoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.ignoreEmptyBlobs"></a>

```typescript
public readonly ignoreEmptyBlobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEvent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerBlobEventConfig <a name="DataFactoryTriggerBlobEventConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerBlobEventConfig: dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#data_factory_id DataFactoryTriggerBlobEvent#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#events DataFactoryTriggerBlobEvent#events}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.pipeline">pipeline</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]</code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#storage_account_id DataFactoryTriggerBlobEvent#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#activated DataFactoryTriggerBlobEvent#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#additional_properties DataFactoryTriggerBlobEvent#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#annotations DataFactoryTriggerBlobEvent#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathBeginsWith">blobPathBeginsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#blob_path_begins_with DataFactoryTriggerBlobEvent#blob_path_begins_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathEndsWith">blobPathEndsWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#blob_path_ends_with DataFactoryTriggerBlobEvent#blob_path_ends_with}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#description DataFactoryTriggerBlobEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#id DataFactoryTriggerBlobEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.ignoreEmptyBlobs">ignoreEmptyBlobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#ignore_empty_blobs DataFactoryTriggerBlobEvent#ignore_empty_blobs}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#data_factory_id DataFactoryTriggerBlobEvent#data_factory_id}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#events DataFactoryTriggerBlobEvent#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.pipeline"></a>

```typescript
public readonly pipeline: IResolvable | DataFactoryTriggerBlobEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#pipeline DataFactoryTriggerBlobEvent#pipeline}

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#storage_account_id DataFactoryTriggerBlobEvent#storage_account_id}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#activated DataFactoryTriggerBlobEvent#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#additional_properties DataFactoryTriggerBlobEvent#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#annotations DataFactoryTriggerBlobEvent#annotations}.

---

##### `blobPathBeginsWith`<sup>Optional</sup> <a name="blobPathBeginsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathBeginsWith"></a>

```typescript
public readonly blobPathBeginsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#blob_path_begins_with DataFactoryTriggerBlobEvent#blob_path_begins_with}.

---

##### `blobPathEndsWith`<sup>Optional</sup> <a name="blobPathEndsWith" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.blobPathEndsWith"></a>

```typescript
public readonly blobPathEndsWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#blob_path_ends_with DataFactoryTriggerBlobEvent#blob_path_ends_with}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#description DataFactoryTriggerBlobEvent#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#id DataFactoryTriggerBlobEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEmptyBlobs`<sup>Optional</sup> <a name="ignoreEmptyBlobs" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.ignoreEmptyBlobs"></a>

```typescript
public readonly ignoreEmptyBlobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#ignore_empty_blobs DataFactoryTriggerBlobEvent#ignore_empty_blobs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerBlobEventTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#timeouts DataFactoryTriggerBlobEvent#timeouts}

---

### DataFactoryTriggerBlobEventPipeline <a name="DataFactoryTriggerBlobEventPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerBlobEventPipeline: dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#parameters DataFactoryTriggerBlobEvent#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#name DataFactoryTriggerBlobEvent#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#parameters DataFactoryTriggerBlobEvent#parameters}.

---

### DataFactoryTriggerBlobEventTimeouts <a name="DataFactoryTriggerBlobEventTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

const dataFactoryTriggerBlobEventTimeouts: dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#create DataFactoryTriggerBlobEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#delete DataFactoryTriggerBlobEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#read DataFactoryTriggerBlobEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#update DataFactoryTriggerBlobEvent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#create DataFactoryTriggerBlobEvent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#delete DataFactoryTriggerBlobEvent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#read DataFactoryTriggerBlobEvent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/data_factory_trigger_blob_event#update DataFactoryTriggerBlobEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerBlobEventPipelineList <a name="DataFactoryTriggerBlobEventPipelineList" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get"></a>

```typescript
public get(index: number): DataFactoryTriggerBlobEventPipelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerBlobEventPipeline[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>[]

---


### DataFactoryTriggerBlobEventPipelineOutputReference <a name="DataFactoryTriggerBlobEventPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerBlobEventPipeline;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventPipeline">DataFactoryTriggerBlobEventPipeline</a>

---


### DataFactoryTriggerBlobEventTimeoutsOutputReference <a name="DataFactoryTriggerBlobEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerBlobEvent } from '@cdktf/provider-azurerm'

new dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerBlobEventTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerBlobEvent.DataFactoryTriggerBlobEventTimeouts">DataFactoryTriggerBlobEventTimeouts</a>

---



