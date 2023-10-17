# `azurerm_backup_policy_vm_workload`

Refer to the Terraform Registory for docs: [`azurerm_backup_policy_vm_workload`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload).

# `backupPolicyVmWorkload` Submodule <a name="`backupPolicyVmWorkload` Submodule" id="@cdktf/provider-azurerm.backupPolicyVmWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVmWorkload <a name="BackupPolicyVmWorkload" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkload(scope: Construct, id: string, config: BackupPolicyVmWorkloadConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig">BackupPolicyVmWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig">BackupPolicyVmWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy">putProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putProtectionPolicy` <a name="putProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy"></a>

```typescript
public putProtectionPolicy(value: IResolvable | BackupPolicyVmWorkloadProtectionPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings"></a>

```typescript
public putSettings(value: BackupPolicyVmWorkloadSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupPolicyVmWorkloadTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupPolicyVmWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupPolicyVmWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVmWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy">protectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput">protectionPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput">recoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `protectionPolicy`<sup>Required</sup> <a name="protectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy"></a>

```typescript
public readonly protectionPolicy: BackupPolicyVmWorkloadProtectionPolicyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings"></a>

```typescript
public readonly settings: BackupPolicyVmWorkloadSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyVmWorkloadTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protectionPolicyInput`<sup>Optional</sup> <a name="protectionPolicyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput"></a>

```typescript
public readonly protectionPolicyInput: IResolvable | BackupPolicyVmWorkloadProtectionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]

---

##### `recoveryVaultNameInput`<sup>Optional</sup> <a name="recoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput"></a>

```typescript
public readonly recoveryVaultNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput"></a>

```typescript
public readonly settingsInput: BackupPolicyVmWorkloadSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupPolicyVmWorkloadTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmWorkloadConfig <a name="BackupPolicyVmWorkloadConfig" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadConfig: backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy">protectionPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]</code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName">recoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `protectionPolicy`<sup>Required</sup> <a name="protectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy"></a>

```typescript
public readonly protectionPolicy: IResolvable | BackupPolicyVmWorkloadProtectionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `recoveryVaultName`<sup>Required</sup> <a name="recoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName"></a>

```typescript
public readonly recoveryVaultName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings"></a>

```typescript
public readonly settings: BackupPolicyVmWorkloadSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupPolicyVmWorkloadTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

### BackupPolicyVmWorkloadProtectionPolicy <a name="BackupPolicyVmWorkloadProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicy: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention">simpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | simple_retention block. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup"></a>

```typescript
public readonly backup: BackupPolicyVmWorkloadProtectionPolicyBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#backup BackupPolicyVmWorkload#backup}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}.

---

##### `retentionDaily`<sup>Optional</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#retention_daily BackupPolicyVmWorkload#retention_daily}

---

##### `retentionMonthly`<sup>Optional</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#retention_monthly BackupPolicyVmWorkload#retention_monthly}

---

##### `retentionWeekly`<sup>Optional</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#retention_weekly BackupPolicyVmWorkload#retention_weekly}

---

##### `retentionYearly`<sup>Optional</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#retention_yearly BackupPolicyVmWorkload#retention_yearly}

---

##### `simpleRetention`<sup>Optional</sup> <a name="simpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention"></a>

```typescript
public readonly simpleRetention: BackupPolicyVmWorkloadProtectionPolicySimpleRetention;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

simple_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#simple_retention BackupPolicyVmWorkload#simple_retention}

---

### BackupPolicyVmWorkloadProtectionPolicyBackup <a name="BackupPolicyVmWorkloadProtectionPolicyBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicyBackup: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes">frequencyInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}.

---

##### `frequencyInMinutes`<sup>Optional</sup> <a name="frequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes"></a>

```typescript
public readonly frequencyInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionDaily <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicyRetentionDaily: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicyRetentionMonthly: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType">formatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays">monthdays</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays"></a>

```typescript
public readonly monthdays: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicyRetentionWeekly: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionYearly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicyRetentionYearly: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType">formatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months">months</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays">monthdays</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays">weekdays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks">weeks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays"></a>

```typescript
public readonly monthdays: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicySimpleRetention <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadProtectionPolicySimpleRetention: backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadSettings <a name="BackupPolicyVmWorkloadSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadSettings: backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}.

---

##### `compressionEnabled`<sup>Optional</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}.

---

### BackupPolicyVmWorkloadTimeouts <a name="BackupPolicyVmWorkloadTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

const backupPolicyVmWorkloadTimeouts: backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes">resetFrequencyInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetFrequencyInMinutes` <a name="resetFrequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes"></a>

```typescript
public resetFrequencyInMinutes(): void
```

##### `resetTime` <a name="resetTime" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime"></a>

```typescript
public resetTime(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput">frequencyInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes">frequencyInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyInMinutesInput`<sup>Optional</sup> <a name="frequencyInMinutesInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput"></a>

```typescript
public readonly frequencyInMinutesInput: number;
```

- *Type:* number

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `frequencyInMinutes`<sup>Required</sup> <a name="frequencyInMinutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes"></a>

```typescript
public readonly frequencyInMinutes: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicyBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---


### BackupPolicyVmWorkloadProtectionPolicyList <a name="BackupPolicyVmWorkloadProtectionPolicyList" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get"></a>

```typescript
public get(index: number): BackupPolicyVmWorkloadProtectionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPolicyVmWorkloadProtectionPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>[]

---


### BackupPolicyVmWorkloadProtectionPolicyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily">putRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly">putRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly">putRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly">putRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention">putSimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily">resetRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly">resetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly">resetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly">resetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention">resetSimpleRetention</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackup` <a name="putBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup"></a>

```typescript
public putBackup(value: BackupPolicyVmWorkloadProtectionPolicyBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `putRetentionDaily` <a name="putRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily"></a>

```typescript
public putRetentionDaily(value: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `putRetentionMonthly` <a name="putRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly"></a>

```typescript
public putRetentionMonthly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `putRetentionWeekly` <a name="putRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly"></a>

```typescript
public putRetentionWeekly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `putRetentionYearly` <a name="putRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly"></a>

```typescript
public putRetentionYearly(value: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `putSimpleRetention` <a name="putSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention"></a>

```typescript
public putSimpleRetention(value: BackupPolicyVmWorkloadProtectionPolicySimpleRetention): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `resetRetentionDaily` <a name="resetRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily"></a>

```typescript
public resetRetentionDaily(): void
```

##### `resetRetentionMonthly` <a name="resetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly"></a>

```typescript
public resetRetentionMonthly(): void
```

##### `resetRetentionWeekly` <a name="resetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly"></a>

```typescript
public resetRetentionWeekly(): void
```

##### `resetRetentionYearly` <a name="resetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly"></a>

```typescript
public resetRetentionYearly(): void
```

##### `resetSimpleRetention` <a name="resetSimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention"></a>

```typescript
public resetSimpleRetention(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily">retentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly">retentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly">retentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly">retentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention">simpleRetention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput">retentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput">retentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput">retentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput">retentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput">simpleRetentionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup"></a>

```typescript
public readonly backup: BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a>

---

##### `retentionDaily`<sup>Required</sup> <a name="retentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily"></a>

```typescript
public readonly retentionDaily: BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a>

---

##### `retentionMonthly`<sup>Required</sup> <a name="retentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly"></a>

```typescript
public readonly retentionMonthly: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a>

---

##### `retentionWeekly`<sup>Required</sup> <a name="retentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly"></a>

```typescript
public readonly retentionWeekly: BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a>

---

##### `retentionYearly`<sup>Required</sup> <a name="retentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly"></a>

```typescript
public readonly retentionYearly: BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a>

---

##### `simpleRetention`<sup>Required</sup> <a name="simpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention"></a>

```typescript
public readonly simpleRetention: BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput"></a>

```typescript
public readonly backupInput: BackupPolicyVmWorkloadProtectionPolicyBackup;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `retentionDailyInput`<sup>Optional</sup> <a name="retentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput"></a>

```typescript
public readonly retentionDailyInput: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `retentionMonthlyInput`<sup>Optional</sup> <a name="retentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput"></a>

```typescript
public readonly retentionMonthlyInput: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `retentionWeeklyInput`<sup>Optional</sup> <a name="retentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput"></a>

```typescript
public readonly retentionWeeklyInput: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `retentionYearlyInput`<sup>Optional</sup> <a name="retentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput"></a>

```typescript
public readonly retentionYearlyInput: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `simpleRetentionInput`<sup>Optional</sup> <a name="simpleRetentionInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput"></a>

```typescript
public readonly simpleRetentionInput: BackupPolicyVmWorkloadProtectionPolicySimpleRetention;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPolicyVmWorkloadProtectionPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays">resetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonthdays` <a name="resetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays"></a>

```typescript
public resetMonthdays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput">monthdaysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays">monthdays</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput"></a>

```typescript
public readonly formatTypeInput: string;
```

- *Type:* string

---

##### `monthdaysInput`<sup>Optional</sup> <a name="monthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput"></a>

```typescript
public readonly monthdaysInput: number[];
```

- *Type:* number[]

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays"></a>

```typescript
public readonly monthdays: number[];
```

- *Type:* number[]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays">resetMonthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays">resetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks">resetWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMonthdays` <a name="resetMonthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays"></a>

```typescript
public resetMonthdays(): void
```

##### `resetWeekdays` <a name="resetWeekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays"></a>

```typescript
public resetWeekdays(): void
```

##### `resetWeeks` <a name="resetWeeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks"></a>

```typescript
public resetWeeks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput">monthdaysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput">weekdaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput">weeksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays">monthdays</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput"></a>

```typescript
public readonly formatTypeInput: string;
```

- *Type:* string

---

##### `monthdaysInput`<sup>Optional</sup> <a name="monthdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput"></a>

```typescript
public readonly monthdaysInput: number[];
```

- *Type:* number[]

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `weekdaysInput`<sup>Optional</sup> <a name="weekdaysInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput"></a>

```typescript
public readonly weekdaysInput: string[];
```

- *Type:* string[]

---

##### `weeksInput`<sup>Optional</sup> <a name="weeksInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput"></a>

```typescript
public readonly weeksInput: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays"></a>

```typescript
public readonly monthdays: number[];
```

- *Type:* number[]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays"></a>

```typescript
public readonly weekdays: string[];
```

- *Type:* string[]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks"></a>

```typescript
public readonly weeks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---


### BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadProtectionPolicySimpleRetention;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---


### BackupPolicyVmWorkloadSettingsOutputReference <a name="BackupPolicyVmWorkloadSettingsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled">resetCompressionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionEnabled` <a name="resetCompressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled"></a>

```typescript
public resetCompressionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput">compressionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled">compressionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionEnabledInput`<sup>Optional</sup> <a name="compressionEnabledInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput"></a>

```typescript
public readonly compressionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `compressionEnabled`<sup>Required</sup> <a name="compressionEnabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled"></a>

```typescript
public readonly compressionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupPolicyVmWorkloadSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---


### BackupPolicyVmWorkloadTimeoutsOutputReference <a name="BackupPolicyVmWorkloadTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupPolicyVmWorkload } from '@cdktf/provider-azurerm'

new backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupPolicyVmWorkloadTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---



