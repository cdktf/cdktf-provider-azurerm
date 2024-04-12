# `dataFactoryIntegrationRuntimeSelfHosted` Submodule <a name="`dataFactoryIntegrationRuntimeSelfHosted` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeSelfHosted <a name="DataFactoryIntegrationRuntimeSelfHosted" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted azurerm_data_factory_integration_runtime_self_hosted}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeSelfHostedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig">DataFactoryIntegrationRuntimeSelfHostedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig">DataFactoryIntegrationRuntimeSelfHostedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization">putRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization">resetRbacAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetSelfContainedInteractiveAuthoringEnabled">resetSelfContainedInteractiveAuthoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRbacAuthorization` <a name="putRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization"></a>

```typescript
public putRbacAuthorization(value: IResolvable | DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putRbacAuthorization.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryIntegrationRuntimeSelfHostedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRbacAuthorization` <a name="resetRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetRbacAuthorization"></a>

```typescript
public resetRbacAuthorization(): void
```

##### `resetSelfContainedInteractiveAuthoringEnabled` <a name="resetSelfContainedInteractiveAuthoringEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetSelfContainedInteractiveAuthoringEnabled"></a>

```typescript
public resetSelfContainedInteractiveAuthoringEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFactoryIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryIntegrationRuntimeSelfHosted to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryIntegrationRuntimeSelfHosted that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeSelfHosted to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey">primaryAuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization">rbacAuthorization</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey">secondaryAuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput">rbacAuthorizationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.selfContainedInteractiveAuthoringEnabledInput">selfContainedInteractiveAuthoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.selfContainedInteractiveAuthoringEnabled">selfContainedInteractiveAuthoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryAuthorizationKey`<sup>Required</sup> <a name="primaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.primaryAuthorizationKey"></a>

```typescript
public readonly primaryAuthorizationKey: string;
```

- *Type:* string

---

##### `rbacAuthorization`<sup>Required</sup> <a name="rbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorization"></a>

```typescript
public readonly rbacAuthorization: DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList</a>

---

##### `secondaryAuthorizationKey`<sup>Required</sup> <a name="secondaryAuthorizationKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.secondaryAuthorizationKey"></a>

```typescript
public readonly secondaryAuthorizationKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference">DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference</a>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rbacAuthorizationInput`<sup>Optional</sup> <a name="rbacAuthorizationInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.rbacAuthorizationInput"></a>

```typescript
public readonly rbacAuthorizationInput: IResolvable | DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]

---

##### `selfContainedInteractiveAuthoringEnabledInput`<sup>Optional</sup> <a name="selfContainedInteractiveAuthoringEnabledInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.selfContainedInteractiveAuthoringEnabledInput"></a>

```typescript
public readonly selfContainedInteractiveAuthoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `selfContainedInteractiveAuthoringEnabled`<sup>Required</sup> <a name="selfContainedInteractiveAuthoringEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.selfContainedInteractiveAuthoringEnabled"></a>

```typescript
public readonly selfContainedInteractiveAuthoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHosted.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeSelfHostedConfig <a name="DataFactoryIntegrationRuntimeSelfHostedConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

const dataFactoryIntegrationRuntimeSelfHostedConfig: dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization">rbacAuthorization</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]</code> | rbac_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.selfContainedInteractiveAuthoringEnabled">selfContainedInteractiveAuthoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#self_contained_interactive_authoring_enabled DataFactoryIntegrationRuntimeSelfHosted#self_contained_interactive_authoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#data_factory_id DataFactoryIntegrationRuntimeSelfHosted#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#name DataFactoryIntegrationRuntimeSelfHosted#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#description DataFactoryIntegrationRuntimeSelfHosted#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#id DataFactoryIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rbacAuthorization`<sup>Optional</sup> <a name="rbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.rbacAuthorization"></a>

```typescript
public readonly rbacAuthorization: IResolvable | DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]

rbac_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#rbac_authorization DataFactoryIntegrationRuntimeSelfHosted#rbac_authorization}

---

##### `selfContainedInteractiveAuthoringEnabled`<sup>Optional</sup> <a name="selfContainedInteractiveAuthoringEnabled" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.selfContainedInteractiveAuthoringEnabled"></a>

```typescript
public readonly selfContainedInteractiveAuthoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#self_contained_interactive_authoring_enabled DataFactoryIntegrationRuntimeSelfHosted#self_contained_interactive_authoring_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#timeouts DataFactoryIntegrationRuntimeSelfHosted#timeouts}

---

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

const dataFactoryIntegrationRuntimeSelfHostedRbacAuthorization: dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#resource_id DataFactoryIntegrationRuntimeSelfHosted#resource_id}.

---

### DataFactoryIntegrationRuntimeSelfHostedTimeouts <a name="DataFactoryIntegrationRuntimeSelfHostedTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

const dataFactoryIntegrationRuntimeSelfHostedTimeouts: dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#create DataFactoryIntegrationRuntimeSelfHosted#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#delete DataFactoryIntegrationRuntimeSelfHosted#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#read DataFactoryIntegrationRuntimeSelfHosted#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_integration_runtime_self_hosted#update DataFactoryIntegrationRuntimeSelfHosted#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get"></a>

```typescript
public get(index: number): DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>[]

---


### DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization">DataFactoryIntegrationRuntimeSelfHostedRbacAuthorization</a>

---


### DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryIntegrationRuntimeSelfHosted } from '@cdktf/provider-azurerm'

new dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryIntegrationRuntimeSelfHostedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeSelfHosted.DataFactoryIntegrationRuntimeSelfHostedTimeouts">DataFactoryIntegrationRuntimeSelfHostedTimeouts</a>

---



