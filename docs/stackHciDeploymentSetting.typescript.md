# `stackHciDeploymentSetting` Submodule <a name="`stackHciDeploymentSetting` Submodule" id="@cdktf/provider-azurerm.stackHciDeploymentSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciDeploymentSetting <a name="StackHciDeploymentSetting" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting azurerm_stack_hci_deployment_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSetting(scope: Construct, id: string, config: StackHciDeploymentSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig">StackHciDeploymentSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig">StackHciDeploymentSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit">putScaleUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScaleUnit` <a name="putScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit"></a>

```typescript
public putScaleUnit(value: IResolvable | StackHciDeploymentSettingScaleUnit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putScaleUnit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: StackHciDeploymentSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackHciDeploymentSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciDeploymentSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciDeploymentSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciDeploymentSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit">scaleUnit</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput">arcResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput">scaleUnitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput">stackHciClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds">arcResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId">stackHciClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: StackHciDeploymentSettingScaleUnitList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList">StackHciDeploymentSettingScaleUnitList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciDeploymentSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference">StackHciDeploymentSettingTimeoutsOutputReference</a>

---

##### `arcResourceIdsInput`<sup>Optional</sup> <a name="arcResourceIdsInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIdsInput"></a>

```typescript
public readonly arcResourceIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scaleUnitInput`<sup>Optional</sup> <a name="scaleUnitInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.scaleUnitInput"></a>

```typescript
public readonly scaleUnitInput: IResolvable | StackHciDeploymentSettingScaleUnit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]

---

##### `stackHciClusterIdInput`<sup>Optional</sup> <a name="stackHciClusterIdInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterIdInput"></a>

```typescript
public readonly stackHciClusterIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackHciDeploymentSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `arcResourceIds`<sup>Required</sup> <a name="arcResourceIds" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.arcResourceIds"></a>

```typescript
public readonly arcResourceIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stackHciClusterId`<sup>Required</sup> <a name="stackHciClusterId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.stackHciClusterId"></a>

```typescript
public readonly stackHciClusterId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciDeploymentSettingConfig <a name="StackHciDeploymentSettingConfig" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingConfig: stackHciDeploymentSetting.StackHciDeploymentSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds">arcResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit">scaleUnit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]</code> | scale_unit block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId">stackHciClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arcResourceIds`<sup>Required</sup> <a name="arcResourceIds" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.arcResourceIds"></a>

```typescript
public readonly arcResourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#arc_resource_ids StackHciDeploymentSetting#arc_resource_ids}.

---

##### `scaleUnit`<sup>Required</sup> <a name="scaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.scaleUnit"></a>

```typescript
public readonly scaleUnit: IResolvable | StackHciDeploymentSettingScaleUnit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]

scale_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#scale_unit StackHciDeploymentSetting#scale_unit}

---

##### `stackHciClusterId`<sup>Required</sup> <a name="stackHciClusterId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.stackHciClusterId"></a>

```typescript
public readonly stackHciClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#stack_hci_cluster_id StackHciDeploymentSetting#stack_hci_cluster_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#version StackHciDeploymentSetting#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#id StackHciDeploymentSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackHciDeploymentSettingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#timeouts StackHciDeploymentSetting#timeouts}

---

### StackHciDeploymentSettingScaleUnit <a name="StackHciDeploymentSettingScaleUnit" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnit: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath">activeDirectoryOrganizationalUnitPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | cluster block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn">domainFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork">hostNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | host_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork">infrastructureNetwork</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]</code> | infrastructure_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService">optionalService</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | optional_service block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode">physicalNode</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]</code> | physical_node block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation">secretsLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled">bitlockerBootVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled">bitlockerDataVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled">credentialGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled">driftControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled">drtmProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled">episodicDataUploadEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled">euLocationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled">hvciProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled">sideChannelMitigationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled">smbClusterEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled">smbSigningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled">streamingDataClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled">wdacEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}. |

---

##### `activeDirectoryOrganizationalUnitPath`<sup>Required</sup> <a name="activeDirectoryOrganizationalUnitPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.activeDirectoryOrganizationalUnitPath"></a>

```typescript
public readonly activeDirectoryOrganizationalUnitPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#active_directory_organizational_unit_path StackHciDeploymentSetting#active_directory_organizational_unit_path}.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.cluster"></a>

```typescript
public readonly cluster: StackHciDeploymentSettingScaleUnitCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#cluster StackHciDeploymentSetting#cluster}

---

##### `domainFqdn`<sup>Required</sup> <a name="domainFqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.domainFqdn"></a>

```typescript
public readonly domainFqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#domain_fqdn StackHciDeploymentSetting#domain_fqdn}.

---

##### `hostNetwork`<sup>Required</sup> <a name="hostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: StackHciDeploymentSettingScaleUnitHostNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

host_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#host_network StackHciDeploymentSetting#host_network}

---

##### `infrastructureNetwork`<sup>Required</sup> <a name="infrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.infrastructureNetwork"></a>

```typescript
public readonly infrastructureNetwork: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]

infrastructure_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#infrastructure_network StackHciDeploymentSetting#infrastructure_network}

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name_prefix StackHciDeploymentSetting#name_prefix}.

---

##### `optionalService`<sup>Required</sup> <a name="optionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.optionalService"></a>

```typescript
public readonly optionalService: StackHciDeploymentSettingScaleUnitOptionalService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

optional_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#optional_service StackHciDeploymentSetting#optional_service}

---

##### `physicalNode`<sup>Required</sup> <a name="physicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.physicalNode"></a>

```typescript
public readonly physicalNode: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]

physical_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#physical_node StackHciDeploymentSetting#physical_node}

---

##### `secretsLocation`<sup>Required</sup> <a name="secretsLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.secretsLocation"></a>

```typescript
public readonly secretsLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#secrets_location StackHciDeploymentSetting#secrets_location}.

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.storage"></a>

```typescript
public readonly storage: StackHciDeploymentSettingScaleUnitStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage StackHciDeploymentSetting#storage}

---

##### `bitlockerBootVolumeEnabled`<sup>Optional</sup> <a name="bitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerBootVolumeEnabled"></a>

```typescript
public readonly bitlockerBootVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bitlocker_boot_volume_enabled StackHciDeploymentSetting#bitlocker_boot_volume_enabled}.

---

##### `bitlockerDataVolumeEnabled`<sup>Optional</sup> <a name="bitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.bitlockerDataVolumeEnabled"></a>

```typescript
public readonly bitlockerDataVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bitlocker_data_volume_enabled StackHciDeploymentSetting#bitlocker_data_volume_enabled}.

---

##### `credentialGuardEnabled`<sup>Optional</sup> <a name="credentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.credentialGuardEnabled"></a>

```typescript
public readonly credentialGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#credential_guard_enabled StackHciDeploymentSetting#credential_guard_enabled}.

---

##### `driftControlEnabled`<sup>Optional</sup> <a name="driftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.driftControlEnabled"></a>

```typescript
public readonly driftControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#drift_control_enabled StackHciDeploymentSetting#drift_control_enabled}.

---

##### `drtmProtectionEnabled`<sup>Optional</sup> <a name="drtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.drtmProtectionEnabled"></a>

```typescript
public readonly drtmProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#drtm_protection_enabled StackHciDeploymentSetting#drtm_protection_enabled}.

---

##### `episodicDataUploadEnabled`<sup>Optional</sup> <a name="episodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.episodicDataUploadEnabled"></a>

```typescript
public readonly episodicDataUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#episodic_data_upload_enabled StackHciDeploymentSetting#episodic_data_upload_enabled}.

---

##### `euLocationEnabled`<sup>Optional</sup> <a name="euLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.euLocationEnabled"></a>

```typescript
public readonly euLocationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#eu_location_enabled StackHciDeploymentSetting#eu_location_enabled}.

---

##### `hvciProtectionEnabled`<sup>Optional</sup> <a name="hvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.hvciProtectionEnabled"></a>

```typescript
public readonly hvciProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#hvci_protection_enabled StackHciDeploymentSetting#hvci_protection_enabled}.

---

##### `sideChannelMitigationEnabled`<sup>Optional</sup> <a name="sideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.sideChannelMitigationEnabled"></a>

```typescript
public readonly sideChannelMitigationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#side_channel_mitigation_enabled StackHciDeploymentSetting#side_channel_mitigation_enabled}.

---

##### `smbClusterEncryptionEnabled`<sup>Optional</sup> <a name="smbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbClusterEncryptionEnabled"></a>

```typescript
public readonly smbClusterEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#smb_cluster_encryption_enabled StackHciDeploymentSetting#smb_cluster_encryption_enabled}.

---

##### `smbSigningEnabled`<sup>Optional</sup> <a name="smbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.smbSigningEnabled"></a>

```typescript
public readonly smbSigningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#smb_signing_enabled StackHciDeploymentSetting#smb_signing_enabled}.

---

##### `streamingDataClientEnabled`<sup>Optional</sup> <a name="streamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.streamingDataClientEnabled"></a>

```typescript
public readonly streamingDataClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#streaming_data_client_enabled StackHciDeploymentSetting#streaming_data_client_enabled}.

---

##### `wdacEnabled`<sup>Optional</sup> <a name="wdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit.property.wdacEnabled"></a>

```typescript
public readonly wdacEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#wdac_enabled StackHciDeploymentSetting#wdac_enabled}.

---

### StackHciDeploymentSettingScaleUnitCluster <a name="StackHciDeploymentSettingScaleUnitCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitCluster: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint">azureServiceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath">witnessPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType">witnessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}. |

---

##### `azureServiceEndpoint`<sup>Required</sup> <a name="azureServiceEndpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.azureServiceEndpoint"></a>

```typescript
public readonly azureServiceEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#azure_service_endpoint StackHciDeploymentSetting#azure_service_endpoint}.

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#cloud_account_name StackHciDeploymentSetting#cloud_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `witnessPath`<sup>Required</sup> <a name="witnessPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessPath"></a>

```typescript
public readonly witnessPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#witness_path StackHciDeploymentSetting#witness_path}.

---

##### `witnessType`<sup>Required</sup> <a name="witnessType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster.property.witnessType"></a>

```typescript
public readonly witnessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#witness_type StackHciDeploymentSetting#witness_type}.

---

### StackHciDeploymentSettingScaleUnitHostNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetwork: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent">intent</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]</code> | intent block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork">storageNetwork</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]</code> | storage_network block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled">storageAutoIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled">storageConnectivitySwitchlessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}. |

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.intent"></a>

```typescript
public readonly intent: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#intent StackHciDeploymentSetting#intent}

---

##### `storageNetwork`<sup>Required</sup> <a name="storageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageNetwork"></a>

```typescript
public readonly storageNetwork: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]

storage_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage_network StackHciDeploymentSetting#storage_network}

---

##### `storageAutoIpEnabled`<sup>Optional</sup> <a name="storageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageAutoIpEnabled"></a>

```typescript
public readonly storageAutoIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage_auto_ip_enabled StackHciDeploymentSetting#storage_auto_ip_enabled}.

---

##### `storageConnectivitySwitchlessEnabled`<sup>Optional</sup> <a name="storageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork.property.storageConnectivitySwitchlessEnabled"></a>

```typescript
public readonly storageConnectivitySwitchlessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#storage_connectivity_switchless_enabled StackHciDeploymentSetting#storage_connectivity_switchless_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntent <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetworkIntent: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter">adapter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType">trafficType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride">adapterPropertyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | adapter_property_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled">adapterPropertyOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride">qosPolicyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | qos_policy_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled">qosPolicyOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride">virtualSwitchConfigurationOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | virtual_switch_configuration_override block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled">virtualSwitchConfigurationOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}. |

---

##### `adapter`<sup>Required</sup> <a name="adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapter"></a>

```typescript
public readonly adapter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#adapter StackHciDeploymentSetting#adapter}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.trafficType"></a>

```typescript
public readonly trafficType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#traffic_type StackHciDeploymentSetting#traffic_type}.

---

##### `adapterPropertyOverride`<sup>Optional</sup> <a name="adapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverride"></a>

```typescript
public readonly adapterPropertyOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

adapter_property_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#adapter_property_override StackHciDeploymentSetting#adapter_property_override}

---

##### `adapterPropertyOverrideEnabled`<sup>Optional</sup> <a name="adapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.adapterPropertyOverrideEnabled"></a>

```typescript
public readonly adapterPropertyOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#adapter_property_override_enabled StackHciDeploymentSetting#adapter_property_override_enabled}.

---

##### `qosPolicyOverride`<sup>Optional</sup> <a name="qosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverride"></a>

```typescript
public readonly qosPolicyOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

qos_policy_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#qos_policy_override StackHciDeploymentSetting#qos_policy_override}

---

##### `qosPolicyOverrideEnabled`<sup>Optional</sup> <a name="qosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.qosPolicyOverrideEnabled"></a>

```typescript
public readonly qosPolicyOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#qos_policy_override_enabled StackHciDeploymentSetting#qos_policy_override_enabled}.

---

##### `virtualSwitchConfigurationOverride`<sup>Optional</sup> <a name="virtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverride"></a>

```typescript
public readonly virtualSwitchConfigurationOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

virtual_switch_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override StackHciDeploymentSetting#virtual_switch_configuration_override}

---

##### `virtualSwitchConfigurationOverrideEnabled`<sup>Optional</sup> <a name="virtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent.property.virtualSwitchConfigurationOverrideEnabled"></a>

```typescript
public readonly virtualSwitchConfigurationOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#virtual_switch_configuration_override_enabled StackHciDeploymentSetting#virtual_switch_configuration_override_enabled}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket">jumboPacket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect">networkDirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology">networkDirectTechnology</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}. |

---

##### `jumboPacket`<sup>Optional</sup> <a name="jumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.jumboPacket"></a>

```typescript
public readonly jumboPacket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#jumbo_packet StackHciDeploymentSetting#jumbo_packet}.

---

##### `networkDirect`<sup>Optional</sup> <a name="networkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirect"></a>

```typescript
public readonly networkDirect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_direct StackHciDeploymentSetting#network_direct}.

---

##### `networkDirectTechnology`<sup>Optional</sup> <a name="networkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride.property.networkDirectTechnology"></a>

```typescript
public readonly networkDirectTechnology: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_direct_technology StackHciDeploymentSetting#network_direct_technology}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb">bandwidthPercentageSmb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster">priorityValue8021ActionCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb">priorityValue8021ActionSmb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}. |

---

##### `bandwidthPercentageSmb`<sup>Optional</sup> <a name="bandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.bandwidthPercentageSmb"></a>

```typescript
public readonly bandwidthPercentageSmb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#bandwidth_percentage_smb StackHciDeploymentSetting#bandwidth_percentage_smb}.

---

##### `priorityValue8021ActionCluster`<sup>Optional</sup> <a name="priorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionCluster"></a>

```typescript
public readonly priorityValue8021ActionCluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_cluster StackHciDeploymentSetting#priority_value8021_action_cluster}.

---

##### `priorityValue8021ActionSmb`<sup>Optional</sup> <a name="priorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride.property.priorityValue8021ActionSmb"></a>

```typescript
public readonly priorityValue8021ActionSmb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#priority_value8021_action_smb StackHciDeploymentSetting#priority_value8021_action_smb}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov">enableIov</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}. |

---

##### `enableIov`<sup>Optional</sup> <a name="enableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.enableIov"></a>

```typescript
public readonly enableIov: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#enable_iov StackHciDeploymentSetting#enable_iov}.

---

##### `loadBalancingAlgorithm`<sup>Optional</sup> <a name="loadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#load_balancing_algorithm StackHciDeploymentSetting#load_balancing_algorithm}.

---

### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName">networkAdapterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId">vlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

##### `networkAdapterName`<sup>Required</sup> <a name="networkAdapterName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.networkAdapterName"></a>

```typescript
public readonly networkAdapterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#network_adapter_name StackHciDeploymentSetting#network_adapter_name}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#vlan_id StackHciDeploymentSetting#vlan_id}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetwork <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitInfrastructureNetwork: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway">gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool">ipPool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]</code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask">subnetMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}. |

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#dns_server StackHciDeploymentSetting#dns_server}.

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#gateway StackHciDeploymentSetting#gateway}.

---

##### `ipPool`<sup>Required</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.ipPool"></a>

```typescript
public readonly ipPool: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#ip_pool StackHciDeploymentSetting#ip_pool}

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.subnetMask"></a>

```typescript
public readonly subnetMask: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#subnet_mask StackHciDeploymentSetting#subnet_mask}.

---

##### `dhcpEnabled`<sup>Optional</sup> <a name="dhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#dhcp_enabled StackHciDeploymentSetting#dhcp_enabled}.

---

### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress">endingAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress">startingAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}. |

---

##### `endingAddress`<sup>Required</sup> <a name="endingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.endingAddress"></a>

```typescript
public readonly endingAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#ending_address StackHciDeploymentSetting#ending_address}.

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool.property.startingAddress"></a>

```typescript
public readonly startingAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#starting_address StackHciDeploymentSetting#starting_address}.

---

### StackHciDeploymentSettingScaleUnitOptionalService <a name="StackHciDeploymentSettingScaleUnitOptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitOptionalService: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation">customLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}. |

---

##### `customLocation`<sup>Required</sup> <a name="customLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService.property.customLocation"></a>

```typescript
public readonly customLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#custom_location StackHciDeploymentSetting#custom_location}.

---

### StackHciDeploymentSettingScaleUnitPhysicalNode <a name="StackHciDeploymentSettingScaleUnitPhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitPhysicalNode: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}. |

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#ipv4_address StackHciDeploymentSetting#ipv4_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#name StackHciDeploymentSetting#name}.

---

### StackHciDeploymentSettingScaleUnitStorage <a name="StackHciDeploymentSettingScaleUnitStorage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingScaleUnitStorage: stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode">configurationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}. |

---

##### `configurationMode`<sup>Required</sup> <a name="configurationMode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage.property.configurationMode"></a>

```typescript
public readonly configurationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#configuration_mode StackHciDeploymentSetting#configuration_mode}.

---

### StackHciDeploymentSettingTimeouts <a name="StackHciDeploymentSettingTimeouts" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

const stackHciDeploymentSettingTimeouts: stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#create StackHciDeploymentSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#delete StackHciDeploymentSetting#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/stack_hci_deployment_setting#read StackHciDeploymentSetting#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciDeploymentSettingScaleUnitClusterOutputReference <a name="StackHciDeploymentSettingScaleUnitClusterOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput">azureServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput">cloudAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput">witnessPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput">witnessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint">azureServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath">witnessPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType">witnessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureServiceEndpointInput`<sup>Optional</sup> <a name="azureServiceEndpointInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpointInput"></a>

```typescript
public readonly azureServiceEndpointInput: string;
```

- *Type:* string

---

##### `cloudAccountNameInput`<sup>Optional</sup> <a name="cloudAccountNameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountNameInput"></a>

```typescript
public readonly cloudAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `witnessPathInput`<sup>Optional</sup> <a name="witnessPathInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPathInput"></a>

```typescript
public readonly witnessPathInput: string;
```

- *Type:* string

---

##### `witnessTypeInput`<sup>Optional</sup> <a name="witnessTypeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessTypeInput"></a>

```typescript
public readonly witnessTypeInput: string;
```

- *Type:* string

---

##### `azureServiceEndpoint`<sup>Required</sup> <a name="azureServiceEndpoint" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.azureServiceEndpoint"></a>

```typescript
public readonly azureServiceEndpoint: string;
```

- *Type:* string

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.cloudAccountName"></a>

```typescript
public readonly cloudAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `witnessPath`<sup>Required</sup> <a name="witnessPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessPath"></a>

```typescript
public readonly witnessPath: string;
```

- *Type:* string

---

##### `witnessType`<sup>Required</sup> <a name="witnessType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.witnessType"></a>

```typescript
public readonly witnessType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket">resetJumboPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect">resetNetworkDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology">resetNetworkDirectTechnology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJumboPacket` <a name="resetJumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetJumboPacket"></a>

```typescript
public resetJumboPacket(): void
```

##### `resetNetworkDirect` <a name="resetNetworkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirect"></a>

```typescript
public resetNetworkDirect(): void
```

##### `resetNetworkDirectTechnology` <a name="resetNetworkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.resetNetworkDirectTechnology"></a>

```typescript
public resetNetworkDirectTechnology(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput">jumboPacketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput">networkDirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput">networkDirectTechnologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket">jumboPacket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect">networkDirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology">networkDirectTechnology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jumboPacketInput`<sup>Optional</sup> <a name="jumboPacketInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacketInput"></a>

```typescript
public readonly jumboPacketInput: string;
```

- *Type:* string

---

##### `networkDirectInput`<sup>Optional</sup> <a name="networkDirectInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectInput"></a>

```typescript
public readonly networkDirectInput: string;
```

- *Type:* string

---

##### `networkDirectTechnologyInput`<sup>Optional</sup> <a name="networkDirectTechnologyInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnologyInput"></a>

```typescript
public readonly networkDirectTechnologyInput: string;
```

- *Type:* string

---

##### `jumboPacket`<sup>Required</sup> <a name="jumboPacket" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.jumboPacket"></a>

```typescript
public readonly jumboPacket: string;
```

- *Type:* string

---

##### `networkDirect`<sup>Required</sup> <a name="networkDirect" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirect"></a>

```typescript
public readonly networkDirect: string;
```

- *Type:* string

---

##### `networkDirectTechnology`<sup>Required</sup> <a name="networkDirectTechnology" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.networkDirectTechnology"></a>

```typescript
public readonly networkDirectTechnology: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentList <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride">putAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride">putQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride">putVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride">resetAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled">resetAdapterPropertyOverrideEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride">resetQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled">resetQosPolicyOverrideEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride">resetVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled">resetVirtualSwitchConfigurationOverrideEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdapterPropertyOverride` <a name="putAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride"></a>

```typescript
public putAdapterPropertyOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putAdapterPropertyOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---

##### `putQosPolicyOverride` <a name="putQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride"></a>

```typescript
public putQosPolicyOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putQosPolicyOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---

##### `putVirtualSwitchConfigurationOverride` <a name="putVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride"></a>

```typescript
public putVirtualSwitchConfigurationOverride(value: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.putVirtualSwitchConfigurationOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---

##### `resetAdapterPropertyOverride` <a name="resetAdapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverride"></a>

```typescript
public resetAdapterPropertyOverride(): void
```

##### `resetAdapterPropertyOverrideEnabled` <a name="resetAdapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetAdapterPropertyOverrideEnabled"></a>

```typescript
public resetAdapterPropertyOverrideEnabled(): void
```

##### `resetQosPolicyOverride` <a name="resetQosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverride"></a>

```typescript
public resetQosPolicyOverride(): void
```

##### `resetQosPolicyOverrideEnabled` <a name="resetQosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetQosPolicyOverrideEnabled"></a>

```typescript
public resetQosPolicyOverrideEnabled(): void
```

##### `resetVirtualSwitchConfigurationOverride` <a name="resetVirtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverride"></a>

```typescript
public resetVirtualSwitchConfigurationOverride(): void
```

##### `resetVirtualSwitchConfigurationOverrideEnabled` <a name="resetVirtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.resetVirtualSwitchConfigurationOverrideEnabled"></a>

```typescript
public resetVirtualSwitchConfigurationOverrideEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride">adapterPropertyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride">qosPolicyOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride">virtualSwitchConfigurationOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput">adapterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput">adapterPropertyOverrideEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput">adapterPropertyOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput">qosPolicyOverrideEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput">qosPolicyOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput">trafficTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput">virtualSwitchConfigurationOverrideEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput">virtualSwitchConfigurationOverrideInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter">adapter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled">adapterPropertyOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled">qosPolicyOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType">trafficType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled">virtualSwitchConfigurationOverrideEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adapterPropertyOverride`<sup>Required</sup> <a name="adapterPropertyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverride"></a>

```typescript
public readonly adapterPropertyOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverrideOutputReference</a>

---

##### `qosPolicyOverride`<sup>Required</sup> <a name="qosPolicyOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverride"></a>

```typescript
public readonly qosPolicyOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference</a>

---

##### `virtualSwitchConfigurationOverride`<sup>Required</sup> <a name="virtualSwitchConfigurationOverride" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverride"></a>

```typescript
public readonly virtualSwitchConfigurationOverride: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference</a>

---

##### `adapterInput`<sup>Optional</sup> <a name="adapterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterInput"></a>

```typescript
public readonly adapterInput: string[];
```

- *Type:* string[]

---

##### `adapterPropertyOverrideEnabledInput`<sup>Optional</sup> <a name="adapterPropertyOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabledInput"></a>

```typescript
public readonly adapterPropertyOverrideEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adapterPropertyOverrideInput`<sup>Optional</sup> <a name="adapterPropertyOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideInput"></a>

```typescript
public readonly adapterPropertyOverrideInput: StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentAdapterPropertyOverride</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `qosPolicyOverrideEnabledInput`<sup>Optional</sup> <a name="qosPolicyOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabledInput"></a>

```typescript
public readonly qosPolicyOverrideEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qosPolicyOverrideInput`<sup>Optional</sup> <a name="qosPolicyOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideInput"></a>

```typescript
public readonly qosPolicyOverrideInput: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficTypeInput"></a>

```typescript
public readonly trafficTypeInput: string[];
```

- *Type:* string[]

---

##### `virtualSwitchConfigurationOverrideEnabledInput`<sup>Optional</sup> <a name="virtualSwitchConfigurationOverrideEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabledInput"></a>

```typescript
public readonly virtualSwitchConfigurationOverrideEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualSwitchConfigurationOverrideInput`<sup>Optional</sup> <a name="virtualSwitchConfigurationOverrideInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideInput"></a>

```typescript
public readonly virtualSwitchConfigurationOverrideInput: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---

##### `adapter`<sup>Required</sup> <a name="adapter" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapter"></a>

```typescript
public readonly adapter: string[];
```

- *Type:* string[]

---

##### `adapterPropertyOverrideEnabled`<sup>Required</sup> <a name="adapterPropertyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.adapterPropertyOverrideEnabled"></a>

```typescript
public readonly adapterPropertyOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `qosPolicyOverrideEnabled`<sup>Required</sup> <a name="qosPolicyOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.qosPolicyOverrideEnabled"></a>

```typescript
public readonly qosPolicyOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.trafficType"></a>

```typescript
public readonly trafficType: string[];
```

- *Type:* string[]

---

##### `virtualSwitchConfigurationOverrideEnabled`<sup>Required</sup> <a name="virtualSwitchConfigurationOverrideEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.virtualSwitchConfigurationOverrideEnabled"></a>

```typescript
public readonly virtualSwitchConfigurationOverrideEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb">resetBandwidthPercentageSmb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster">resetPriorityValue8021ActionCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb">resetPriorityValue8021ActionSmb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthPercentageSmb` <a name="resetBandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetBandwidthPercentageSmb"></a>

```typescript
public resetBandwidthPercentageSmb(): void
```

##### `resetPriorityValue8021ActionCluster` <a name="resetPriorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionCluster"></a>

```typescript
public resetPriorityValue8021ActionCluster(): void
```

##### `resetPriorityValue8021ActionSmb` <a name="resetPriorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.resetPriorityValue8021ActionSmb"></a>

```typescript
public resetPriorityValue8021ActionSmb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput">bandwidthPercentageSmbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput">priorityValue8021ActionClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput">priorityValue8021ActionSmbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb">bandwidthPercentageSmb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster">priorityValue8021ActionCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb">priorityValue8021ActionSmb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthPercentageSmbInput`<sup>Optional</sup> <a name="bandwidthPercentageSmbInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmbInput"></a>

```typescript
public readonly bandwidthPercentageSmbInput: string;
```

- *Type:* string

---

##### `priorityValue8021ActionClusterInput`<sup>Optional</sup> <a name="priorityValue8021ActionClusterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionClusterInput"></a>

```typescript
public readonly priorityValue8021ActionClusterInput: string;
```

- *Type:* string

---

##### `priorityValue8021ActionSmbInput`<sup>Optional</sup> <a name="priorityValue8021ActionSmbInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmbInput"></a>

```typescript
public readonly priorityValue8021ActionSmbInput: string;
```

- *Type:* string

---

##### `bandwidthPercentageSmb`<sup>Required</sup> <a name="bandwidthPercentageSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.bandwidthPercentageSmb"></a>

```typescript
public readonly bandwidthPercentageSmb: string;
```

- *Type:* string

---

##### `priorityValue8021ActionCluster`<sup>Required</sup> <a name="priorityValue8021ActionCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionCluster"></a>

```typescript
public readonly priorityValue8021ActionCluster: string;
```

- *Type:* string

---

##### `priorityValue8021ActionSmb`<sup>Required</sup> <a name="priorityValue8021ActionSmb" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.priorityValue8021ActionSmb"></a>

```typescript
public readonly priorityValue8021ActionSmb: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentQosPolicyOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov">resetEnableIov</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm">resetLoadBalancingAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIov` <a name="resetEnableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetEnableIov"></a>

```typescript
public resetEnableIov(): void
```

##### `resetLoadBalancingAlgorithm` <a name="resetLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.resetLoadBalancingAlgorithm"></a>

```typescript
public resetLoadBalancingAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput">enableIovInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput">loadBalancingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov">enableIov</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm">loadBalancingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIovInput`<sup>Optional</sup> <a name="enableIovInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIovInput"></a>

```typescript
public readonly enableIovInput: string;
```

- *Type:* string

---

##### `loadBalancingAlgorithmInput`<sup>Optional</sup> <a name="loadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithmInput"></a>

```typescript
public readonly loadBalancingAlgorithmInput: string;
```

- *Type:* string

---

##### `enableIov`<sup>Required</sup> <a name="enableIov" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.enableIov"></a>

```typescript
public readonly enableIov: string;
```

- *Type:* string

---

##### `loadBalancingAlgorithm`<sup>Required</sup> <a name="loadBalancingAlgorithm" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.loadBalancingAlgorithm"></a>

```typescript
public readonly loadBalancingAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride">StackHciDeploymentSettingScaleUnitHostNetworkIntentVirtualSwitchConfigurationOverride</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork">putStorageNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled">resetStorageAutoIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled">resetStorageConnectivitySwitchlessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntent` <a name="putIntent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent"></a>

```typescript
public putIntent(value: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putIntent.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]

---

##### `putStorageNetwork` <a name="putStorageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork"></a>

```typescript
public putStorageNetwork(value: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.putStorageNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]

---

##### `resetStorageAutoIpEnabled` <a name="resetStorageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageAutoIpEnabled"></a>

```typescript
public resetStorageAutoIpEnabled(): void
```

##### `resetStorageConnectivitySwitchlessEnabled` <a name="resetStorageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.resetStorageConnectivitySwitchlessEnabled"></a>

```typescript
public resetStorageConnectivitySwitchlessEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork">storageNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput">intentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput">storageAutoIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput">storageConnectivitySwitchlessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput">storageNetworkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled">storageAutoIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled">storageConnectivitySwitchlessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intent"></a>

```typescript
public readonly intent: StackHciDeploymentSettingScaleUnitHostNetworkIntentList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntentList">StackHciDeploymentSettingScaleUnitHostNetworkIntentList</a>

---

##### `storageNetwork`<sup>Required</sup> <a name="storageNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetwork"></a>

```typescript
public readonly storageNetwork: StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList</a>

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.intentInput"></a>

```typescript
public readonly intentInput: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkIntent">StackHciDeploymentSettingScaleUnitHostNetworkIntent</a>[]

---

##### `storageAutoIpEnabledInput`<sup>Optional</sup> <a name="storageAutoIpEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabledInput"></a>

```typescript
public readonly storageAutoIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageConnectivitySwitchlessEnabledInput`<sup>Optional</sup> <a name="storageConnectivitySwitchlessEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabledInput"></a>

```typescript
public readonly storageConnectivitySwitchlessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageNetworkInput`<sup>Optional</sup> <a name="storageNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageNetworkInput"></a>

```typescript
public readonly storageNetworkInput: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]

---

##### `storageAutoIpEnabled`<sup>Required</sup> <a name="storageAutoIpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageAutoIpEnabled"></a>

```typescript
public readonly storageAutoIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageConnectivitySwitchlessEnabled`<sup>Required</sup> <a name="storageConnectivitySwitchlessEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.storageConnectivitySwitchlessEnabled"></a>

```typescript
public readonly storageConnectivitySwitchlessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitHostNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>[]

---


### StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput">networkAdapterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput">vlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName">networkAdapterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId">vlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAdapterNameInput`<sup>Optional</sup> <a name="networkAdapterNameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterNameInput"></a>

```typescript
public readonly networkAdapterNameInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkAdapterName`<sup>Required</sup> <a name="networkAdapterName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.networkAdapterName"></a>

```typescript
public readonly networkAdapterName: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.vlanId"></a>

```typescript
public readonly vlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork">StackHciDeploymentSettingScaleUnitHostNetworkStorageNetwork</a>

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput">endingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput">startingAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress">endingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress">startingAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endingAddressInput`<sup>Optional</sup> <a name="endingAddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddressInput"></a>

```typescript
public readonly endingAddressInput: string;
```

- *Type:* string

---

##### `startingAddressInput`<sup>Optional</sup> <a name="startingAddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddressInput"></a>

```typescript
public readonly startingAddressInput: string;
```

- *Type:* string

---

##### `endingAddress`<sup>Required</sup> <a name="endingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.endingAddress"></a>

```typescript
public readonly endingAddress: string;
```

- *Type:* string

---

##### `startingAddress`<sup>Required</sup> <a name="startingAddress" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.startingAddress"></a>

```typescript
public readonly startingAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkList <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]

---


### StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference <a name="StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool">putIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled">resetDhcpEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpPool` <a name="putIpPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool"></a>

```typescript
public putIpPool(value: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.putIpPool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]

---

##### `resetDhcpEnabled` <a name="resetDhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.resetDhcpEnabled"></a>

```typescript
public resetDhcpEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool">ipPool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput">dhcpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput">ipPoolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput">subnetMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask">subnetMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipPool`<sup>Required</sup> <a name="ipPool" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPool"></a>

```typescript
public readonly ipPool: StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPoolList</a>

---

##### `dhcpEnabledInput`<sup>Optional</sup> <a name="dhcpEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabledInput"></a>

```typescript
public readonly dhcpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string[];
```

- *Type:* string[]

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipPoolInput`<sup>Optional</sup> <a name="ipPoolInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.ipPoolInput"></a>

```typescript
public readonly ipPoolInput: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool">StackHciDeploymentSettingScaleUnitInfrastructureNetworkIpPool</a>[]

---

##### `subnetMaskInput`<sup>Optional</sup> <a name="subnetMaskInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMaskInput"></a>

```typescript
public readonly subnetMaskInput: string;
```

- *Type:* string

---

##### `dhcpEnabled`<sup>Required</sup> <a name="dhcpEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `subnetMask`<sup>Required</sup> <a name="subnetMask" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.subnetMask"></a>

```typescript
public readonly subnetMask: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>

---


### StackHciDeploymentSettingScaleUnitList <a name="StackHciDeploymentSettingScaleUnitList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>[]

---


### StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference <a name="StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput">customLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation">customLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customLocationInput`<sup>Optional</sup> <a name="customLocationInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocationInput"></a>

```typescript
public readonly customLocationInput: string;
```

- *Type:* string

---

##### `customLocation`<sup>Required</sup> <a name="customLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.customLocation"></a>

```typescript
public readonly customLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitOptionalService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---


### StackHciDeploymentSettingScaleUnitOutputReference <a name="StackHciDeploymentSettingScaleUnitOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster">putCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork">putHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork">putInfrastructureNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService">putOptionalService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode">putPhysicalNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled">resetBitlockerBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled">resetBitlockerDataVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled">resetCredentialGuardEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled">resetDriftControlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled">resetDrtmProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled">resetEpisodicDataUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled">resetEuLocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled">resetHvciProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled">resetSideChannelMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled">resetSmbClusterEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled">resetSmbSigningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled">resetStreamingDataClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled">resetWdacEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCluster` <a name="putCluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster"></a>

```typescript
public putCluster(value: StackHciDeploymentSettingScaleUnitCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---

##### `putHostNetwork` <a name="putHostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork"></a>

```typescript
public putHostNetwork(value: StackHciDeploymentSettingScaleUnitHostNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putHostNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---

##### `putInfrastructureNetwork` <a name="putInfrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork"></a>

```typescript
public putInfrastructureNetwork(value: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putInfrastructureNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]

---

##### `putOptionalService` <a name="putOptionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService"></a>

```typescript
public putOptionalService(value: StackHciDeploymentSettingScaleUnitOptionalService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putOptionalService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---

##### `putPhysicalNode` <a name="putPhysicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode"></a>

```typescript
public putPhysicalNode(value: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putPhysicalNode.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage"></a>

```typescript
public putStorage(value: StackHciDeploymentSettingScaleUnitStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---

##### `resetBitlockerBootVolumeEnabled` <a name="resetBitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerBootVolumeEnabled"></a>

```typescript
public resetBitlockerBootVolumeEnabled(): void
```

##### `resetBitlockerDataVolumeEnabled` <a name="resetBitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetBitlockerDataVolumeEnabled"></a>

```typescript
public resetBitlockerDataVolumeEnabled(): void
```

##### `resetCredentialGuardEnabled` <a name="resetCredentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetCredentialGuardEnabled"></a>

```typescript
public resetCredentialGuardEnabled(): void
```

##### `resetDriftControlEnabled` <a name="resetDriftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDriftControlEnabled"></a>

```typescript
public resetDriftControlEnabled(): void
```

##### `resetDrtmProtectionEnabled` <a name="resetDrtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetDrtmProtectionEnabled"></a>

```typescript
public resetDrtmProtectionEnabled(): void
```

##### `resetEpisodicDataUploadEnabled` <a name="resetEpisodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEpisodicDataUploadEnabled"></a>

```typescript
public resetEpisodicDataUploadEnabled(): void
```

##### `resetEuLocationEnabled` <a name="resetEuLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetEuLocationEnabled"></a>

```typescript
public resetEuLocationEnabled(): void
```

##### `resetHvciProtectionEnabled` <a name="resetHvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetHvciProtectionEnabled"></a>

```typescript
public resetHvciProtectionEnabled(): void
```

##### `resetSideChannelMitigationEnabled` <a name="resetSideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSideChannelMitigationEnabled"></a>

```typescript
public resetSideChannelMitigationEnabled(): void
```

##### `resetSmbClusterEncryptionEnabled` <a name="resetSmbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbClusterEncryptionEnabled"></a>

```typescript
public resetSmbClusterEncryptionEnabled(): void
```

##### `resetSmbSigningEnabled` <a name="resetSmbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetSmbSigningEnabled"></a>

```typescript
public resetSmbSigningEnabled(): void
```

##### `resetStreamingDataClientEnabled` <a name="resetStreamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetStreamingDataClientEnabled"></a>

```typescript
public resetStreamingDataClientEnabled(): void
```

##### `resetWdacEnabled` <a name="resetWdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.resetWdacEnabled"></a>

```typescript
public resetWdacEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork">hostNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork">infrastructureNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService">optionalService</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode">physicalNode</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput">activeDirectoryOrganizationalUnitPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput">bitlockerBootVolumeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput">bitlockerDataVolumeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput">clusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput">credentialGuardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput">domainFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput">driftControlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput">drtmProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput">episodicDataUploadEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput">euLocationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput">hostNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput">hvciProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput">infrastructureNetworkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput">optionalServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput">physicalNodeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput">secretsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput">sideChannelMitigationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput">smbClusterEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput">smbSigningEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput">streamingDataClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput">wdacEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath">activeDirectoryOrganizationalUnitPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled">bitlockerBootVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled">bitlockerDataVolumeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled">credentialGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn">domainFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled">driftControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled">drtmProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled">episodicDataUploadEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled">euLocationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled">hvciProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation">secretsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled">sideChannelMitigationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled">smbClusterEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled">smbSigningEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled">streamingDataClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled">wdacEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.cluster"></a>

```typescript
public readonly cluster: StackHciDeploymentSettingScaleUnitClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitClusterOutputReference">StackHciDeploymentSettingScaleUnitClusterOutputReference</a>

---

##### `hostNetwork`<sup>Required</sup> <a name="hostNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: StackHciDeploymentSettingScaleUnitHostNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetworkOutputReference">StackHciDeploymentSettingScaleUnitHostNetworkOutputReference</a>

---

##### `infrastructureNetwork`<sup>Required</sup> <a name="infrastructureNetwork" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetwork"></a>

```typescript
public readonly infrastructureNetwork: StackHciDeploymentSettingScaleUnitInfrastructureNetworkList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetworkList">StackHciDeploymentSettingScaleUnitInfrastructureNetworkList</a>

---

##### `optionalService`<sup>Required</sup> <a name="optionalService" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalService"></a>

```typescript
public readonly optionalService: StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference">StackHciDeploymentSettingScaleUnitOptionalServiceOutputReference</a>

---

##### `physicalNode`<sup>Required</sup> <a name="physicalNode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNode"></a>

```typescript
public readonly physicalNode: StackHciDeploymentSettingScaleUnitPhysicalNodeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList">StackHciDeploymentSettingScaleUnitPhysicalNodeList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storage"></a>

```typescript
public readonly storage: StackHciDeploymentSettingScaleUnitStorageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference">StackHciDeploymentSettingScaleUnitStorageOutputReference</a>

---

##### `activeDirectoryOrganizationalUnitPathInput`<sup>Optional</sup> <a name="activeDirectoryOrganizationalUnitPathInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPathInput"></a>

```typescript
public readonly activeDirectoryOrganizationalUnitPathInput: string;
```

- *Type:* string

---

##### `bitlockerBootVolumeEnabledInput`<sup>Optional</sup> <a name="bitlockerBootVolumeEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabledInput"></a>

```typescript
public readonly bitlockerBootVolumeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bitlockerDataVolumeEnabledInput`<sup>Optional</sup> <a name="bitlockerDataVolumeEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabledInput"></a>

```typescript
public readonly bitlockerDataVolumeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: StackHciDeploymentSettingScaleUnitCluster;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitCluster">StackHciDeploymentSettingScaleUnitCluster</a>

---

##### `credentialGuardEnabledInput`<sup>Optional</sup> <a name="credentialGuardEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabledInput"></a>

```typescript
public readonly credentialGuardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainFqdnInput`<sup>Optional</sup> <a name="domainFqdnInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdnInput"></a>

```typescript
public readonly domainFqdnInput: string;
```

- *Type:* string

---

##### `driftControlEnabledInput`<sup>Optional</sup> <a name="driftControlEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabledInput"></a>

```typescript
public readonly driftControlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drtmProtectionEnabledInput`<sup>Optional</sup> <a name="drtmProtectionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabledInput"></a>

```typescript
public readonly drtmProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `episodicDataUploadEnabledInput`<sup>Optional</sup> <a name="episodicDataUploadEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabledInput"></a>

```typescript
public readonly episodicDataUploadEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `euLocationEnabledInput`<sup>Optional</sup> <a name="euLocationEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabledInput"></a>

```typescript
public readonly euLocationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNetworkInput`<sup>Optional</sup> <a name="hostNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hostNetworkInput"></a>

```typescript
public readonly hostNetworkInput: StackHciDeploymentSettingScaleUnitHostNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitHostNetwork">StackHciDeploymentSettingScaleUnitHostNetwork</a>

---

##### `hvciProtectionEnabledInput`<sup>Optional</sup> <a name="hvciProtectionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabledInput"></a>

```typescript
public readonly hvciProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `infrastructureNetworkInput`<sup>Optional</sup> <a name="infrastructureNetworkInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.infrastructureNetworkInput"></a>

```typescript
public readonly infrastructureNetworkInput: IResolvable | StackHciDeploymentSettingScaleUnitInfrastructureNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitInfrastructureNetwork">StackHciDeploymentSettingScaleUnitInfrastructureNetwork</a>[]

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `optionalServiceInput`<sup>Optional</sup> <a name="optionalServiceInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.optionalServiceInput"></a>

```typescript
public readonly optionalServiceInput: StackHciDeploymentSettingScaleUnitOptionalService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOptionalService">StackHciDeploymentSettingScaleUnitOptionalService</a>

---

##### `physicalNodeInput`<sup>Optional</sup> <a name="physicalNodeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.physicalNodeInput"></a>

```typescript
public readonly physicalNodeInput: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]

---

##### `secretsLocationInput`<sup>Optional</sup> <a name="secretsLocationInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocationInput"></a>

```typescript
public readonly secretsLocationInput: string;
```

- *Type:* string

---

##### `sideChannelMitigationEnabledInput`<sup>Optional</sup> <a name="sideChannelMitigationEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabledInput"></a>

```typescript
public readonly sideChannelMitigationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbClusterEncryptionEnabledInput`<sup>Optional</sup> <a name="smbClusterEncryptionEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabledInput"></a>

```typescript
public readonly smbClusterEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbSigningEnabledInput`<sup>Optional</sup> <a name="smbSigningEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabledInput"></a>

```typescript
public readonly smbSigningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: StackHciDeploymentSettingScaleUnitStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---

##### `streamingDataClientEnabledInput`<sup>Optional</sup> <a name="streamingDataClientEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabledInput"></a>

```typescript
public readonly streamingDataClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `wdacEnabledInput`<sup>Optional</sup> <a name="wdacEnabledInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabledInput"></a>

```typescript
public readonly wdacEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `activeDirectoryOrganizationalUnitPath`<sup>Required</sup> <a name="activeDirectoryOrganizationalUnitPath" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.activeDirectoryOrganizationalUnitPath"></a>

```typescript
public readonly activeDirectoryOrganizationalUnitPath: string;
```

- *Type:* string

---

##### `bitlockerBootVolumeEnabled`<sup>Required</sup> <a name="bitlockerBootVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerBootVolumeEnabled"></a>

```typescript
public readonly bitlockerBootVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bitlockerDataVolumeEnabled`<sup>Required</sup> <a name="bitlockerDataVolumeEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.bitlockerDataVolumeEnabled"></a>

```typescript
public readonly bitlockerDataVolumeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `credentialGuardEnabled`<sup>Required</sup> <a name="credentialGuardEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.credentialGuardEnabled"></a>

```typescript
public readonly credentialGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainFqdn`<sup>Required</sup> <a name="domainFqdn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.domainFqdn"></a>

```typescript
public readonly domainFqdn: string;
```

- *Type:* string

---

##### `driftControlEnabled`<sup>Required</sup> <a name="driftControlEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.driftControlEnabled"></a>

```typescript
public readonly driftControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drtmProtectionEnabled`<sup>Required</sup> <a name="drtmProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.drtmProtectionEnabled"></a>

```typescript
public readonly drtmProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `episodicDataUploadEnabled`<sup>Required</sup> <a name="episodicDataUploadEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.episodicDataUploadEnabled"></a>

```typescript
public readonly episodicDataUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `euLocationEnabled`<sup>Required</sup> <a name="euLocationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.euLocationEnabled"></a>

```typescript
public readonly euLocationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hvciProtectionEnabled`<sup>Required</sup> <a name="hvciProtectionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.hvciProtectionEnabled"></a>

```typescript
public readonly hvciProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `secretsLocation`<sup>Required</sup> <a name="secretsLocation" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.secretsLocation"></a>

```typescript
public readonly secretsLocation: string;
```

- *Type:* string

---

##### `sideChannelMitigationEnabled`<sup>Required</sup> <a name="sideChannelMitigationEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.sideChannelMitigationEnabled"></a>

```typescript
public readonly sideChannelMitigationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbClusterEncryptionEnabled`<sup>Required</sup> <a name="smbClusterEncryptionEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbClusterEncryptionEnabled"></a>

```typescript
public readonly smbClusterEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smbSigningEnabled`<sup>Required</sup> <a name="smbSigningEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.smbSigningEnabled"></a>

```typescript
public readonly smbSigningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `streamingDataClientEnabled`<sup>Required</sup> <a name="streamingDataClientEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.streamingDataClientEnabled"></a>

```typescript
public readonly streamingDataClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `wdacEnabled`<sup>Required</sup> <a name="wdacEnabled" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.wdacEnabled"></a>

```typescript
public readonly wdacEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnit">StackHciDeploymentSettingScaleUnit</a>

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeList <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeList" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get"></a>

```typescript
public get(index: number): StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>[]

---


### StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference <a name="StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingScaleUnitPhysicalNode;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitPhysicalNode">StackHciDeploymentSettingScaleUnitPhysicalNode</a>

---


### StackHciDeploymentSettingScaleUnitStorageOutputReference <a name="StackHciDeploymentSettingScaleUnitStorageOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput">configurationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode">configurationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationModeInput`<sup>Optional</sup> <a name="configurationModeInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationModeInput"></a>

```typescript
public readonly configurationModeInput: string;
```

- *Type:* string

---

##### `configurationMode`<sup>Required</sup> <a name="configurationMode" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.configurationMode"></a>

```typescript
public readonly configurationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackHciDeploymentSettingScaleUnitStorage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingScaleUnitStorage">StackHciDeploymentSettingScaleUnitStorage</a>

---


### StackHciDeploymentSettingTimeoutsOutputReference <a name="StackHciDeploymentSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackHciDeploymentSetting } from '@cdktf/provider-azurerm'

new stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackHciDeploymentSettingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.stackHciDeploymentSetting.StackHciDeploymentSettingTimeouts">StackHciDeploymentSettingTimeouts</a>

---



