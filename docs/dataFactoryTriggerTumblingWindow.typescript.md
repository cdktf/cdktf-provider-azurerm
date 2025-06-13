# `dataFactoryTriggerTumblingWindow` Submodule <a name="`dataFactoryTriggerTumblingWindow` Submodule" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerTumblingWindow <a name="DataFactoryTriggerTumblingWindow" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window azurerm_data_factory_trigger_tumbling_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow(scope: Construct, id: string, config: DataFactoryTriggerTumblingWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig">DataFactoryTriggerTumblingWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig">DataFactoryTriggerTumblingWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry">putRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency">putTriggerDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency">resetTriggerDependency</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline"></a>

```typescript
public putPipeline(value: DataFactoryTriggerTumblingWindowPipeline): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---

##### `putRetry` <a name="putRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry"></a>

```typescript
public putRetry(value: DataFactoryTriggerTumblingWindowRetry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryTriggerTumblingWindowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---

##### `putTriggerDependency` <a name="putTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency"></a>

```typescript
public putTriggerDependency(value: IResolvable | DataFactoryTriggerTumblingWindowTriggerDependency[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.putTriggerDependency.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]

---

##### `resetActivated` <a name="resetActivated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetActivated"></a>

```typescript
public resetActivated(): void
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetMaxConcurrency"></a>

```typescript
public resetMaxConcurrency(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggerDependency` <a name="resetTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.resetTriggerDependency"></a>

```typescript
public resetTriggerDependency(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryTriggerTumblingWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryTriggerTumblingWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryTriggerTumblingWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryTriggerTumblingWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerTumblingWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency">triggerDependency</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput">activatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput">delayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput">pipelineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput">retryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput">triggerDependencyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay">delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipeline"></a>

```typescript
public readonly pipeline: DataFactoryTriggerTumblingWindowPipelineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference">DataFactoryTriggerTumblingWindowPipelineOutputReference</a>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retry"></a>

```typescript
public readonly retry: DataFactoryTriggerTumblingWindowRetryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference">DataFactoryTriggerTumblingWindowRetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerTumblingWindowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference">DataFactoryTriggerTumblingWindowTimeoutsOutputReference</a>

---

##### `triggerDependency`<sup>Required</sup> <a name="triggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependency"></a>

```typescript
public readonly triggerDependency: DataFactoryTriggerTumblingWindowTriggerDependencyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList">DataFactoryTriggerTumblingWindowTriggerDependencyList</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activatedInput"></a>

```typescript
public readonly activatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delayInput"></a>

```typescript
public readonly delayInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: DataFactoryTriggerTumblingWindowPipeline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.retryInput"></a>

```typescript
public readonly retryInput: DataFactoryTriggerTumblingWindowRetry;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryTriggerTumblingWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---

##### `triggerDependencyInput`<sup>Optional</sup> <a name="triggerDependencyInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.triggerDependencyInput"></a>

```typescript
public readonly triggerDependencyInput: IResolvable | DataFactoryTriggerTumblingWindowTriggerDependency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerTumblingWindowConfig <a name="DataFactoryTriggerTumblingWindowConfig" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

const dataFactoryTriggerTumblingWindowConfig: dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline">pipeline</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | pipeline block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated">activated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay">delay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry">retry</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency">triggerDependency</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]</code> | trigger_dependency block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}.

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#frequency DataFactoryTriggerTumblingWindow#frequency}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.pipeline"></a>

```typescript
public readonly pipeline: DataFactoryTriggerTumblingWindowPipeline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#pipeline DataFactoryTriggerTumblingWindow#pipeline}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#start_time DataFactoryTriggerTumblingWindow#start_time}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.activated"></a>

```typescript
public readonly activated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#activated DataFactoryTriggerTumblingWindow#activated}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#annotations DataFactoryTriggerTumblingWindow#annotations}.

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#delay DataFactoryTriggerTumblingWindow#delay}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#description DataFactoryTriggerTumblingWindow#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#end_time DataFactoryTriggerTumblingWindow#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#id DataFactoryTriggerTumblingWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}.

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.retry"></a>

```typescript
public readonly retry: DataFactoryTriggerTumblingWindowRetry;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#retry DataFactoryTriggerTumblingWindow#retry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryTriggerTumblingWindowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#timeouts DataFactoryTriggerTumblingWindow#timeouts}

---

##### `triggerDependency`<sup>Optional</sup> <a name="triggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowConfig.property.triggerDependency"></a>

```typescript
public readonly triggerDependency: IResolvable | DataFactoryTriggerTumblingWindowTriggerDependency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]

trigger_dependency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}

---

### DataFactoryTriggerTumblingWindowPipeline <a name="DataFactoryTriggerTumblingWindowPipeline" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

const dataFactoryTriggerTumblingWindowPipeline: dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#name DataFactoryTriggerTumblingWindow#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#parameters DataFactoryTriggerTumblingWindow#parameters}.

---

### DataFactoryTriggerTumblingWindowRetry <a name="DataFactoryTriggerTumblingWindowRetry" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

const dataFactoryTriggerTumblingWindowRetry: dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#count DataFactoryTriggerTumblingWindow#count}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#interval DataFactoryTriggerTumblingWindow#interval}.

---

### DataFactoryTriggerTumblingWindowTimeouts <a name="DataFactoryTriggerTumblingWindowTimeouts" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

const dataFactoryTriggerTumblingWindowTimeouts: dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#create DataFactoryTriggerTumblingWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#delete DataFactoryTriggerTumblingWindow#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#read DataFactoryTriggerTumblingWindow#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#update DataFactoryTriggerTumblingWindow#update}.

---

### DataFactoryTriggerTumblingWindowTriggerDependency <a name="DataFactoryTriggerTumblingWindowTriggerDependency" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

const dataFactoryTriggerTumblingWindowTriggerDependency: dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size">size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName">triggerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#offset DataFactoryTriggerTumblingWindow#offset}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#size DataFactoryTriggerTumblingWindow#size}.

---

##### `triggerName`<sup>Optional</sup> <a name="triggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/data_factory_trigger_tumbling_window#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerTumblingWindowPipelineOutputReference <a name="DataFactoryTriggerTumblingWindowPipelineOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryTriggerTumblingWindowPipeline;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowPipeline">DataFactoryTriggerTumblingWindowPipeline</a>

---


### DataFactoryTriggerTumblingWindowRetryOutputReference <a name="DataFactoryTriggerTumblingWindowRetryOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryTriggerTumblingWindowRetry;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowRetry">DataFactoryTriggerTumblingWindowRetry</a>

---


### DataFactoryTriggerTumblingWindowTimeoutsOutputReference <a name="DataFactoryTriggerTumblingWindowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerTumblingWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTimeouts">DataFactoryTriggerTumblingWindowTimeouts</a>

---


### DataFactoryTriggerTumblingWindowTriggerDependencyList <a name="DataFactoryTriggerTumblingWindowTriggerDependencyList" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get"></a>

```typescript
public get(index: number): DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerTumblingWindowTriggerDependency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>[]

---


### DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference <a name="DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer"></a>

```typescript
import { dataFactoryTriggerTumblingWindow } from '@cdktf/provider-azurerm'

new dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName">resetTriggerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTriggerName` <a name="resetTriggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.resetTriggerName"></a>

```typescript
public resetTriggerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput">triggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName">triggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `triggerNameInput`<sup>Optional</sup> <a name="triggerNameInput" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerNameInput"></a>

```typescript
public readonly triggerNameInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryTriggerTumblingWindowTriggerDependency;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryTriggerTumblingWindow.DataFactoryTriggerTumblingWindowTriggerDependency">DataFactoryTriggerTumblingWindowTriggerDependency</a>

---



