# `azurerm_disk_pool_iscsi_target_lun`

Refer to the Terraform Registory for docs: [`azurerm_disk_pool_iscsi_target_lun`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun).

# `diskPoolIscsiTargetLun` Submodule <a name="`diskPoolIscsiTargetLun` Submodule" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolIscsiTargetLun <a name="DiskPoolIscsiTargetLun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

new diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun(scope: Construct, id: string, config: DiskPoolIscsiTargetLunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig">DiskPoolIscsiTargetLunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig">DiskPoolIscsiTargetLunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts"></a>

```typescript
public putTimeouts(value: DiskPoolIscsiTargetLunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput">diskPoolManagedDiskAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput">iscsiTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId">diskPoolManagedDiskAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId">iscsiTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts"></a>

```typescript
public readonly timeouts: DiskPoolIscsiTargetLunTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a>

---

##### `diskPoolManagedDiskAttachmentIdInput`<sup>Optional</sup> <a name="diskPoolManagedDiskAttachmentIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput"></a>

```typescript
public readonly diskPoolManagedDiskAttachmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iscsiTargetIdInput`<sup>Optional</sup> <a name="iscsiTargetIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput"></a>

```typescript
public readonly iscsiTargetIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DiskPoolIscsiTargetLunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---

##### `diskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="diskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId"></a>

```typescript
public readonly diskPoolManagedDiskAttachmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iscsiTargetId`<sup>Required</sup> <a name="iscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId"></a>

```typescript
public readonly iscsiTargetId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolIscsiTargetLunConfig <a name="DiskPoolIscsiTargetLunConfig" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.Initializer"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

const diskPoolIscsiTargetLunConfig: diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId">diskPoolManagedDiskAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId">iscsiTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="diskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId"></a>

```typescript
public readonly diskPoolManagedDiskAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `iscsiTargetId`<sup>Required</sup> <a name="iscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId"></a>

```typescript
public readonly iscsiTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DiskPoolIscsiTargetLunTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

### DiskPoolIscsiTargetLunTimeouts <a name="DiskPoolIscsiTargetLunTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.Initializer"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

const diskPoolIscsiTargetLunTimeouts: diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolIscsiTargetLunTimeoutsOutputReference <a name="DiskPoolIscsiTargetLunTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer"></a>

```typescript
import { diskPoolIscsiTargetLun } from '@cdktf/provider-azurerm'

new diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DiskPoolIscsiTargetLunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---



