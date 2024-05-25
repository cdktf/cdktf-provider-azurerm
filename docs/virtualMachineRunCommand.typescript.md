# `virtualMachineRunCommand` Submodule <a name="`virtualMachineRunCommand` Submodule" id="@cdktf/provider-azurerm.virtualMachineRunCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineRunCommand <a name="VirtualMachineRunCommand" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command azurerm_virtual_machine_run_command}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommand(scope: Construct, id: string, config: VirtualMachineRunCommandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig">VirtualMachineRunCommandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity">putErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity">putOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter">putProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity">resetErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri">resetErrorBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity">resetOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri">resetOutputBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter">resetProtectedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword">resetRunAsPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorBlobManagedIdentity` <a name="putErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity"></a>

```typescript
public putErrorBlobManagedIdentity(value: VirtualMachineRunCommandErrorBlobManagedIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putErrorBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `putOutputBlobManagedIdentity` <a name="putOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity"></a>

```typescript
public putOutputBlobManagedIdentity(value: VirtualMachineRunCommandOutputBlobManagedIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putOutputBlobManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter"></a>

```typescript
public putParameter(value: IResolvable | VirtualMachineRunCommandParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]

---

##### `putProtectedParameter` <a name="putProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter"></a>

```typescript
public putProtectedParameter(value: IResolvable | VirtualMachineRunCommandProtectedParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putProtectedParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]

---

##### `putSource` <a name="putSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource"></a>

```typescript
public putSource(value: VirtualMachineRunCommandSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts"></a>

```typescript
public putTimeouts(value: VirtualMachineRunCommandTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

---

##### `resetErrorBlobManagedIdentity` <a name="resetErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobManagedIdentity"></a>

```typescript
public resetErrorBlobManagedIdentity(): void
```

##### `resetErrorBlobUri` <a name="resetErrorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetErrorBlobUri"></a>

```typescript
public resetErrorBlobUri(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOutputBlobManagedIdentity` <a name="resetOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobManagedIdentity"></a>

```typescript
public resetOutputBlobManagedIdentity(): void
```

##### `resetOutputBlobUri` <a name="resetOutputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetOutputBlobUri"></a>

```typescript
public resetOutputBlobUri(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetProtectedParameter` <a name="resetProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetProtectedParameter"></a>

```typescript
public resetProtectedParameter(): void
```

##### `resetRunAsPassword` <a name="resetRunAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsPassword"></a>

```typescript
public resetRunAsPassword(): void
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetRunAsUser"></a>

```typescript
public resetRunAsUser(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachineRunCommand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachineRunCommand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachineRunCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineRunCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity">errorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView">instanceView</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity">outputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter">protectedParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput">errorBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput">errorBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput">outputBlobManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput">outputBlobUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput">protectedParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput">runAsPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput">runAsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri">errorBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri">outputBlobUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword">runAsPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser">runAsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorBlobManagedIdentity`<sup>Required</sup> <a name="errorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentity"></a>

```typescript
public readonly errorBlobManagedIdentity: VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference">VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference</a>

---

##### `instanceView`<sup>Required</sup> <a name="instanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.instanceView"></a>

```typescript
public readonly instanceView: VirtualMachineRunCommandInstanceViewList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList">VirtualMachineRunCommandInstanceViewList</a>

---

##### `outputBlobManagedIdentity`<sup>Required</sup> <a name="outputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentity"></a>

```typescript
public readonly outputBlobManagedIdentity: VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference">VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameter"></a>

```typescript
public readonly parameter: VirtualMachineRunCommandParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList">VirtualMachineRunCommandParameterList</a>

---

##### `protectedParameter`<sup>Required</sup> <a name="protectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameter"></a>

```typescript
public readonly protectedParameter: VirtualMachineRunCommandProtectedParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList">VirtualMachineRunCommandProtectedParameterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.source"></a>

```typescript
public readonly source: VirtualMachineRunCommandSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference">VirtualMachineRunCommandSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineRunCommandTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference">VirtualMachineRunCommandTimeoutsOutputReference</a>

---

##### `errorBlobManagedIdentityInput`<sup>Optional</sup> <a name="errorBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobManagedIdentityInput"></a>

```typescript
public readonly errorBlobManagedIdentityInput: VirtualMachineRunCommandErrorBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---

##### `errorBlobUriInput`<sup>Optional</sup> <a name="errorBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUriInput"></a>

```typescript
public readonly errorBlobUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputBlobManagedIdentityInput`<sup>Optional</sup> <a name="outputBlobManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobManagedIdentityInput"></a>

```typescript
public readonly outputBlobManagedIdentityInput: VirtualMachineRunCommandOutputBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---

##### `outputBlobUriInput`<sup>Optional</sup> <a name="outputBlobUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUriInput"></a>

```typescript
public readonly outputBlobUriInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | VirtualMachineRunCommandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]

---

##### `protectedParameterInput`<sup>Optional</sup> <a name="protectedParameterInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.protectedParameterInput"></a>

```typescript
public readonly protectedParameterInput: IResolvable | VirtualMachineRunCommandProtectedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]

---

##### `runAsPasswordInput`<sup>Optional</sup> <a name="runAsPasswordInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPasswordInput"></a>

```typescript
public readonly runAsPasswordInput: string;
```

- *Type:* string

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.sourceInput"></a>

```typescript
public readonly sourceInput: VirtualMachineRunCommandSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VirtualMachineRunCommandTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineIdInput"></a>

```typescript
public readonly virtualMachineIdInput: string;
```

- *Type:* string

---

##### `errorBlobUri`<sup>Required</sup> <a name="errorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.errorBlobUri"></a>

```typescript
public readonly errorBlobUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputBlobUri`<sup>Required</sup> <a name="outputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.outputBlobUri"></a>

```typescript
public readonly outputBlobUri: string;
```

- *Type:* string

---

##### `runAsPassword`<sup>Required</sup> <a name="runAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsPassword"></a>

```typescript
public readonly runAsPassword: string;
```

- *Type:* string

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.runAsUser"></a>

```typescript
public readonly runAsUser: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineRunCommandConfig <a name="VirtualMachineRunCommandConfig" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandConfig: virtualMachineRunCommand.VirtualMachineRunCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity">errorBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | error_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri">errorBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity">outputBlobManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | output_blob_managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri">outputBlobUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter">protectedParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]</code> | protected_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword">runAsPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser">runAsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#location VirtualMachineRunCommand#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.source"></a>

```typescript
public readonly source: VirtualMachineRunCommandSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#source VirtualMachineRunCommand#source}

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.virtualMachineId"></a>

```typescript
public readonly virtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#virtual_machine_id VirtualMachineRunCommand#virtual_machine_id}.

---

##### `errorBlobManagedIdentity`<sup>Optional</sup> <a name="errorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobManagedIdentity"></a>

```typescript
public readonly errorBlobManagedIdentity: VirtualMachineRunCommandErrorBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

error_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#error_blob_managed_identity VirtualMachineRunCommand#error_blob_managed_identity}

---

##### `errorBlobUri`<sup>Optional</sup> <a name="errorBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.errorBlobUri"></a>

```typescript
public readonly errorBlobUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#error_blob_uri VirtualMachineRunCommand#error_blob_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#id VirtualMachineRunCommand#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputBlobManagedIdentity`<sup>Optional</sup> <a name="outputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobManagedIdentity"></a>

```typescript
public readonly outputBlobManagedIdentity: VirtualMachineRunCommandOutputBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

output_blob_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#output_blob_managed_identity VirtualMachineRunCommand#output_blob_managed_identity}

---

##### `outputBlobUri`<sup>Optional</sup> <a name="outputBlobUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.outputBlobUri"></a>

```typescript
public readonly outputBlobUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#output_blob_uri VirtualMachineRunCommand#output_blob_uri}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | VirtualMachineRunCommandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#parameter VirtualMachineRunCommand#parameter}

---

##### `protectedParameter`<sup>Optional</sup> <a name="protectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.protectedParameter"></a>

```typescript
public readonly protectedParameter: IResolvable | VirtualMachineRunCommandProtectedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]

protected_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#protected_parameter VirtualMachineRunCommand#protected_parameter}

---

##### `runAsPassword`<sup>Optional</sup> <a name="runAsPassword" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsPassword"></a>

```typescript
public readonly runAsPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#run_as_password VirtualMachineRunCommand#run_as_password}.

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.runAsUser"></a>

```typescript
public readonly runAsUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#run_as_user VirtualMachineRunCommand#run_as_user}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#tags VirtualMachineRunCommand#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VirtualMachineRunCommandTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#timeouts VirtualMachineRunCommand#timeouts}

---

### VirtualMachineRunCommandErrorBlobManagedIdentity <a name="VirtualMachineRunCommandErrorBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandErrorBlobManagedIdentity: virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandInstanceView <a name="VirtualMachineRunCommandInstanceView" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandInstanceView: virtualMachineRunCommand.VirtualMachineRunCommandInstanceView = { ... }
```


### VirtualMachineRunCommandOutputBlobManagedIdentity <a name="VirtualMachineRunCommandOutputBlobManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandOutputBlobManagedIdentity: virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandParameter <a name="VirtualMachineRunCommandParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandParameter: virtualMachineRunCommand.VirtualMachineRunCommandParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandProtectedParameter <a name="VirtualMachineRunCommandProtectedParameter" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandProtectedParameter: virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#name VirtualMachineRunCommand#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#value VirtualMachineRunCommand#value}.

---

### VirtualMachineRunCommandSource <a name="VirtualMachineRunCommandSource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandSource: virtualMachineRunCommand.VirtualMachineRunCommandSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId">commandId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri">scriptUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity">scriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | script_uri_managed_identity block. |

---

##### `commandId`<sup>Optional</sup> <a name="commandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#command_id VirtualMachineRunCommand#command_id}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#script VirtualMachineRunCommand#script}.

---

##### `scriptUri`<sup>Optional</sup> <a name="scriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUri"></a>

```typescript
public readonly scriptUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#script_uri VirtualMachineRunCommand#script_uri}.

---

##### `scriptUriManagedIdentity`<sup>Optional</sup> <a name="scriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource.property.scriptUriManagedIdentity"></a>

```typescript
public readonly scriptUriManagedIdentity: VirtualMachineRunCommandSourceScriptUriManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

script_uri_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#script_uri_managed_identity VirtualMachineRunCommand#script_uri_managed_identity}

---

### VirtualMachineRunCommandSourceScriptUriManagedIdentity <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandSourceScriptUriManagedIdentity: virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#client_id VirtualMachineRunCommand#client_id}.

---

##### `objectId`<sup>Optional</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#object_id VirtualMachineRunCommand#object_id}.

---

### VirtualMachineRunCommandTimeouts <a name="VirtualMachineRunCommandTimeouts" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

const virtualMachineRunCommandTimeouts: virtualMachineRunCommand.VirtualMachineRunCommandTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#create VirtualMachineRunCommand#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#delete VirtualMachineRunCommand#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#read VirtualMachineRunCommand#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/virtual_machine_run_command#update VirtualMachineRunCommand#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.resetObjectId"></a>

```typescript
public resetObjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineRunCommandErrorBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandErrorBlobManagedIdentity">VirtualMachineRunCommandErrorBlobManagedIdentity</a>

---


### VirtualMachineRunCommandInstanceViewList <a name="VirtualMachineRunCommandInstanceViewList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get"></a>

```typescript
public get(index: number): VirtualMachineRunCommandInstanceViewOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### VirtualMachineRunCommandInstanceViewOutputReference <a name="VirtualMachineRunCommandInstanceViewOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage">executionMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState">executionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `executionMessage`<sup>Required</sup> <a name="executionMessage" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionMessage"></a>

```typescript
public readonly executionMessage: string;
```

- *Type:* string

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.executionState"></a>

```typescript
public readonly executionState: string;
```

- *Type:* string

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceViewOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineRunCommandInstanceView;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandInstanceView">VirtualMachineRunCommandInstanceView</a>

---


### VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference <a name="VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.resetObjectId"></a>

```typescript
public resetObjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineRunCommandOutputBlobManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandOutputBlobManagedIdentity">VirtualMachineRunCommandOutputBlobManagedIdentity</a>

---


### VirtualMachineRunCommandParameterList <a name="VirtualMachineRunCommandParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get"></a>

```typescript
public get(index: number): VirtualMachineRunCommandParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineRunCommandParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>[]

---


### VirtualMachineRunCommandParameterOutputReference <a name="VirtualMachineRunCommandParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineRunCommandParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandParameter">VirtualMachineRunCommandParameter</a>

---


### VirtualMachineRunCommandProtectedParameterList <a name="VirtualMachineRunCommandProtectedParameterList" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get"></a>

```typescript
public get(index: number): VirtualMachineRunCommandProtectedParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineRunCommandProtectedParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>[]

---


### VirtualMachineRunCommandProtectedParameterOutputReference <a name="VirtualMachineRunCommandProtectedParameterOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineRunCommandProtectedParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandProtectedParameter">VirtualMachineRunCommandProtectedParameter</a>

---


### VirtualMachineRunCommandSourceOutputReference <a name="VirtualMachineRunCommandSourceOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity">putScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId">resetCommandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri">resetScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity">resetScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptUriManagedIdentity` <a name="putScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity"></a>

```typescript
public putScriptUriManagedIdentity(value: VirtualMachineRunCommandSourceScriptUriManagedIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.putScriptUriManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `resetCommandId` <a name="resetCommandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetCommandId"></a>

```typescript
public resetCommandId(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetScriptUri` <a name="resetScriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUri"></a>

```typescript
public resetScriptUri(): void
```

##### `resetScriptUriManagedIdentity` <a name="resetScriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.resetScriptUriManagedIdentity"></a>

```typescript
public resetScriptUriManagedIdentity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity">scriptUriManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput">commandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput">scriptUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput">scriptUriManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId">commandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri">scriptUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptUriManagedIdentity`<sup>Required</sup> <a name="scriptUriManagedIdentity" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentity"></a>

```typescript
public readonly scriptUriManagedIdentity: VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference">VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference</a>

---

##### `commandIdInput`<sup>Optional</sup> <a name="commandIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandIdInput"></a>

```typescript
public readonly commandIdInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `scriptUriInput`<sup>Optional</sup> <a name="scriptUriInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriInput"></a>

```typescript
public readonly scriptUriInput: string;
```

- *Type:* string

---

##### `scriptUriManagedIdentityInput`<sup>Optional</sup> <a name="scriptUriManagedIdentityInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUriManagedIdentityInput"></a>

```typescript
public readonly scriptUriManagedIdentityInput: VirtualMachineRunCommandSourceScriptUriManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptUri`<sup>Required</sup> <a name="scriptUri" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.scriptUri"></a>

```typescript
public readonly scriptUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineRunCommandSource;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSource">VirtualMachineRunCommandSource</a>

---


### VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference <a name="VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId">resetObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetObjectId` <a name="resetObjectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.resetObjectId"></a>

```typescript
public resetObjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineRunCommandSourceScriptUriManagedIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandSourceScriptUriManagedIdentity">VirtualMachineRunCommandSourceScriptUriManagedIdentity</a>

---


### VirtualMachineRunCommandTimeoutsOutputReference <a name="VirtualMachineRunCommandTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer"></a>

```typescript
import { virtualMachineRunCommand } from '@cdktf/provider-azurerm'

new virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineRunCommandTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.virtualMachineRunCommand.VirtualMachineRunCommandTimeouts">VirtualMachineRunCommandTimeouts</a>

---



