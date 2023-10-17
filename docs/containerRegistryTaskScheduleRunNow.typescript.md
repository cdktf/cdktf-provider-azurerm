# `azurerm_container_registry_task_schedule_run_now`

Refer to the Terraform Registory for docs: [`azurerm_container_registry_task_schedule_run_now`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now).

# `containerRegistryTaskScheduleRunNow` Submodule <a name="`containerRegistryTaskScheduleRunNow` Submodule" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTaskScheduleRunNow <a name="ContainerRegistryTaskScheduleRunNow" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now azurerm_container_registry_task_schedule_run_now}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

new containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow(scope: Construct, id: string, config: ContainerRegistryTaskScheduleRunNowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig">ContainerRegistryTaskScheduleRunNowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig">ContainerRegistryTaskScheduleRunNowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerRegistryTaskScheduleRunNowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryTaskScheduleRunNow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerRegistryTaskScheduleRunNow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryTaskScheduleRunNow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryTaskScheduleRunNow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryTaskScheduleRunNow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference">ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskIdInput">containerRegistryTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskId">containerRegistryTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference">ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference</a>

---

##### `containerRegistryTaskIdInput`<sup>Optional</sup> <a name="containerRegistryTaskIdInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskIdInput"></a>

```typescript
public readonly containerRegistryTaskIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerRegistryTaskScheduleRunNowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

---

##### `containerRegistryTaskId`<sup>Required</sup> <a name="containerRegistryTaskId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.containerRegistryTaskId"></a>

```typescript
public readonly containerRegistryTaskId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTaskScheduleRunNowConfig <a name="ContainerRegistryTaskScheduleRunNowConfig" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.Initializer"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

const containerRegistryTaskScheduleRunNowConfig: containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.containerRegistryTaskId">containerRegistryTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#container_registry_task_id ContainerRegistryTaskScheduleRunNow#container_registry_task_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#id ContainerRegistryTaskScheduleRunNow#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerRegistryTaskId`<sup>Required</sup> <a name="containerRegistryTaskId" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.containerRegistryTaskId"></a>

```typescript
public readonly containerRegistryTaskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#container_registry_task_id ContainerRegistryTaskScheduleRunNow#container_registry_task_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#id ContainerRegistryTaskScheduleRunNow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryTaskScheduleRunNowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#timeouts ContainerRegistryTaskScheduleRunNow#timeouts}

---

### ContainerRegistryTaskScheduleRunNowTimeouts <a name="ContainerRegistryTaskScheduleRunNowTimeouts" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.Initializer"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

const containerRegistryTaskScheduleRunNowTimeouts: containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#create ContainerRegistryTaskScheduleRunNow#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#delete ContainerRegistryTaskScheduleRunNow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#read ContainerRegistryTaskScheduleRunNow#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#create ContainerRegistryTaskScheduleRunNow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#delete ContainerRegistryTaskScheduleRunNow#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/container_registry_task_schedule_run_now#read ContainerRegistryTaskScheduleRunNow#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference <a name="ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerRegistryTaskScheduleRunNow } from '@cdktf/provider-azurerm'

new containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerRegistryTaskScheduleRunNowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryTaskScheduleRunNow.ContainerRegistryTaskScheduleRunNowTimeouts">ContainerRegistryTaskScheduleRunNowTimeouts</a>

---



